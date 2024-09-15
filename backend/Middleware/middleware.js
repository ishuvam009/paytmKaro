require("dotenv").config;
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Authorization failed.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    if (decode.userId) {
      req.userId = decode.userId;
      next();
    }
  } catch (error) {
    return res.status(403).json({
      message: "Verification failed.",
    });
  }
};

module.exports = { authMiddleware };
