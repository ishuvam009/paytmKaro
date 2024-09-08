require("dotenv").config();
const express = require("express");
const mainRouter = require("./Routes/appRoutes")

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/v1",mainRoutermb )

app.listen(PORT, () => {
  console.log(`Appp is running at port: ${PORT}.`);
});
