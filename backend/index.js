require("dotenv").config();
const express = require("express");
const mainRouter = require("./Routes/appRoutes");
const cors = require("cors");
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.use("/api/v1",mainRouter )

app.listen(PORT, () => {
  console.log(`Appp is running at port: ${PORT}.`);
});
