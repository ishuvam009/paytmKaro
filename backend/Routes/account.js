const express = require("express");
const { Account, Transaction, User } = require("../DB/db");
const { default: mongoose } = require("mongoose");
const router = express.Router();
//Implement middleware.

//We have two endpoints to check user balance one is req.body another is req.query

//Req.body
router.post("/balance", async (req, res) => {
  const account = await Account.findOne({
    userId: req.body.userId,
  });

  if (!account) {
    return res.status(400).json({
      message: "Acount didnt exist",
    });
  } else
    res.json({
      balance: account.balance,
    });
});

//req.query
router.get("/get-balance", async (req, res) => {
  const account = await Account.findOne({
    userId: req.query.userId,
  });

  if (!account) {
    return res.status(400).json({
      message: "Account no is invalid.",
    });
  } else
    res.json({
      "Account balance is: ": account.balance,
    });
});

router.post("/transaction", async (req, res) => {
  const senderId = req.body.senderId;
  const recipientId = req.body.recipientId;
  const amount = req.body.amount;

  const session = await mongoose.startSession();
  session.startTransaction();

  const senderAccount = await Account.findOne({ userId: senderId }).session(
    session
  );
  const recipientAccount = await Account.findOne({
    userId: recipientId,
  }).session(session);

  if (!senderAccount || !recipientAccount) {
    return res.status(404).json({
      message: "Account not found.",
    });
  }

  if (senderAccount.balance < amount) {
    return res.status(400).json({
      message: "Insufficient Balnce.",
    });
  }

  //sending the funds and debit it from sender.
  // senderAccount.balance -= amount;
  // recipientAccount.balance += amount;

  // await senderAccount.save({ session });
  // await recipientAccount.save({ session });

  await Account.updateOne(
    { userId: senderId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: recipientId },
    { $inc: { balance: amount } }
  ).session(session);

  const transactionsUpdate = new Transaction({
    senderId,
    recipientId,
    amount,
    transactionDate: new Date(),
  });

  await transactionsUpdate.save({ session });

  await session.commitTransaction();
  session.endSession();

  return res.json({ message: "Transaction Successful", transactionsUpdate });
});

router.post("/add-money", async (req, res) => {
  const id = req.body.id;
  const amount = req.body.amount;

  try {
    const updateUser = await Account.findOne({ userId: id });

    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const amountToAdd = mongoose.Types.Decimal128.fromString(amount.toString());

    await Account.updateOne({ userId: id }, { $inc: { balance: amountToAdd } });
    res.json({
        message: "Money added successfully."
    });

  } catch (error) {
    console.error("Error:", error);
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
