const express = require("express");
require("dotenv").config();
const { z } = require("zod");
const jwt = require("jsonwebtoken")
const router = express.Router();
const { User } = require("../DB/db");
const JWT_SECRET = process.env.JWT_SECRET;

const zodUserModel = z.object({
    username: z.string().trim().max(20).trim().regex(/^[a-zA-Z0-9._-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/),
    password: z.string().min(8),
    firstName: z.string().trim().max(20),
    lastName: z.string().max(20).trim()
});

router.post("/signup",async (req,res)=>{
    const { success } = zodUserModel.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect Inputs."
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        res.status(411).json({
            message: "Email alreday exist."
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created sucessfully.",
        token: token
    })
})

module.exports = router; 