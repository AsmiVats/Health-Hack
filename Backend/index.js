const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ConnectDB = require("./db");


const app = express();
app.use(cors());
app.use(bodyParser.json());

ConnectDB();


app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });


