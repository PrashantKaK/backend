// const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Importing user Schema
const User = require("../Models/user")

//POST Create API
router.post("/createuser", async(req,res) =>
{
        const { username, password } = req.body;
        try {
            let user = await User.findOne({ username:username });
            if (user) {
                return res
                    .status(400)
                    .json({ success: false, error: "User already exists" });
            }
            user = await User.create({
                username: req.body.username,
                password: req.body.password,
            });
    
            res.status(200).json({ success: true, user });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, error: "Some Internal Server Error" });
        }
    
})

module.exports = router;