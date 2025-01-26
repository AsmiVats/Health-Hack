const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ConnectDB = require("./db");
const callRoutes = require('./routes/call');
const hospitalRoutes = require('./routes/hospital')
const chatBotRoutes=require('./routes/chatbot')


const app = express();
app.use(cors());
app.use(bodyParser.json());

ConnectDB();

app.use('/api', callRoutes);
app.use('/hospital',hospitalRoutes);
app.use('/chat',chatBotRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });


