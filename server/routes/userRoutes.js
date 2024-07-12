const express = require("express");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const router = express.Router();
const bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    try {
        
        // const newUser = await User.create({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password
        // });
        const userExists = await User.findOne({email: req.body.email});
        // if (userExists){
        //     res.send({
        //         success: false,
        //         message: "User already exists"
        //     })
        // }
        // const newUser = new User(req.body);
        // await newUser.save();
        // return res.status(201).json(newUser);

        // Password Security
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Password hashing using bcrypt
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            success: true,
            message: "Mubarak Hoo, Aap Register hogye."
        });

    } catch (err) {
        res.json(err);
    }
});

router.post("/login", async (req, res) => {
  // Check if the email is registered
  // Check if the password matches
  
  // Check if the email exixts in the database 
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user){
        res.send({
            success: false,
            message: "User does not exist, please register."
        })
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword){
        return res.send({
            success: false,
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({userId : user.id}, process.env.JWT_SECRET, {expiresIn : "1d"});
    res.send({
        success: true,
        message: "User logged in.",
        token: token,
    })
  } catch (err) {
    res.json(err);
  }

});


module.exports = router;