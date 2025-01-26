const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ConnectDB = require("./db");
const callRoutes = require('./routes/call');



const app = express();
app.use(cors());
app.use(bodyParser.json());

ConnectDB();

app.use('/api', callRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });


