const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./config/connect/dbConnect");
connectDb();
const userRoot = require("./roots/userRoots");
var cors = require('cors')
const port = 5000;
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
} 

app.use(cors(corsOptions))
app.use(express.json());



app.use("/user", userRoot);


app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
