const express = require("express");
const { Account, Transaction } = require("../DB/db");
const { default: mongoose } = require("mongoose");
const router = express.Router();
//Implement middleware.

router.get('/balance',async (req,res)=>{
    const account = await Account.findOne({
        userId: req.body.userId
    })
    
    res.json({
        "Account Balance" : account.balance,
    })
})

router.post("/transaction", async (req,res)=>{
    const senderId = req.body.senderId;
    const recipientId = req.body.recipientId;
    const amount = req.body.amount;

    const session = await mongoose.startSession();
    session.startTransaction();

    const senderAccount = await Account.findOne({userId: senderId}).session(session);
    const recipientAccount = await Account.findOne({userId: recipientId}).session(session);

    if(!senderAccount || !recipientAccount){
        return res.status(404).json({
            message: "Account not found."
        })
    }

    if(senderAccount.balance < amount){
        return res.status(400).json({
            message: "Insufficient Balnce."
        })
    }

    //sending the funds and debit it from sender.
    // senderAccount.balance -= amount;
    // recipientAccount.balance += amount;

    // await senderAccount.save({ session });
    // await recipientAccount.save({ session });

    await Account.updateOne({userId: senderId}, {$inc: {balance: -amount} }).session(session);
    await Account.updateOne({userId: recipientId}, {$inc: {balance: amount} }).session(session)

    const transactionsUpdate = new Transaction({
        senderId,
        recipientId,
        amount,
        transactionDate: new Date(),
    })

    await transactionsUpdate.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res.json({message: "Transaction Successful", transactionsUpdate})
})

module.exports = router;