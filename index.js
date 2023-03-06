const express = require("express");
const { connect } = require("./config/db");
const { HospitalRouter } = require("./routes/Hospital.route");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/", HospitalRouter);
require("dotenv").config();
app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connect to db");
  } catch (error) {
    console.log("something went wrong ");
    console.log(error);
  }
  console.log("server is running ");
});
