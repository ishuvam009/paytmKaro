const express = require("express");
const { Account } = require("../DB/db");
const mongoose = require("mongoose")
const router = express.Router();

router.get('/balance',async (req,res)=>{
    const account = await Account.findOne({
        userId: req.body.userId
    })
    
    res.json({
        "Account Balance" : account.balance,
    })
})

module.exports = router;