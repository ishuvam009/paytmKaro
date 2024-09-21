const express = require("express");
require("dotenv").config();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User, Account } = require("../DB/db");
const JWT_SECRET = process.env.JWT_SECRET;
const authMiddleware = require("../Middleware/middleware");

const zodUserModel = z.object({
  username: z
    .string()
    .trim()
    .max(20)
    .trim()
    .regex(/^[a-zA-Z0-9._-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
  firstName: z.string().trim().max(20),
  // lastName: z.string().max(20).trim(),
});

const zodUserLoginModel = z.object({
  username: z
    .string()
    .trim()
    .max(20)
    .trim()
    .regex(/^[a-zA-Z0-9._-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
});

const passwordChangeModel = z.object({
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
});

router.post("/signup", async (req, res) => {
  const parsedData = zodUserModel.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({
      message: "Incorrect Inputs.",
      errors: parsedData.error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      })),
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(409).json({
      message: "Email alreday exists.",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;
  const userFirstName = user.firstName;
  const userLastName = user.lastName;

  const token = jwt.sign(
    {
      userId,
      userFirstName,
      userLastName,
    },
    JWT_SECRET
  );

  const account = await Account.create({
    userId,
    balance: 5000,
  });

  return res.json({
    message: "User created sucessfully.",
    balance: account.balance,
    token: token,
    userId,
    userFirstName,
  });
});

router.post("/login", async (req, res) => {
  const parseData = zodUserLoginModel.safeParse(req.body);

  if (!parseData.success) {
    return res.status(406).json({
      message: "Wrong inputs.",
      errors: parseData.error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      })),
    });
  }

  const userCred = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!userCred) {
    return res.status(404).json({
      message: "Please re-Check your id and password.",
    });
  } else if (userCred) {
    const userId = userCred._id;
    const userFirstName = userCred.firstName;
    const userLastName = userCred.lastName;

    const token = jwt.sign(
      {
        userId,
        userFirstName,
        userLastName,
      },
      JWT_SECRET
    );

    return res.json({
      message: "LogIn SuccessFul",
      token: token,
      userId,
      userFirstName,
    });
  } else
    return res.status(401).json({
      message: "Error in login.",
    });
});

// router.put("/passwordchange", authMiddleware, async (req, res) => {

// //Dont use this route this is incomplete.
// //Need some logic to authenticate the user.
//   const changedPassword = passwordChangeModel.safeParse(req.body);

//   const currentPassword =  await User.findOne({
//     username: req.body.username,
//     password: req.body.password,
//   })

//   if(!currentPassword){
//     return res.status(404).json({
//       message: "Either username or password is incorrect."
//     })
//   }

//   if(changedPassword.data === currentPassword.password){
//     return res.json({message: "New password is same as curent password."})
//   } else if(!changedPassword.success){
//     return res.status(411).json({
//       message: "Wrong Inputs",
//       errors: parsedData.error.errors.map((err) => ({
//         path: err.path.join("."),
//         message: err.message,
//       })),
//     })
//   }

//   else{

//   }
// });

router.get("/bulk", async (req, res) => {
  try {
    const filter = req.query.filter || "";

    if (!filter) {
      return res.json({ message: "No user found" });
    }

    // Find users using their first name or last name
    const users = await User.find({
      $or: [
        {
          firstName: {
            $regex: filter,
            $options: "i", // Case-insensitive search
          },
        },
        {
          lastName: {
            $regex: filter,
            $options: "i", // Case-insensitive search
          },
        },
      ],
    });

    // Return response
    res.status(200).json({
      user: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (error) {
    // console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
