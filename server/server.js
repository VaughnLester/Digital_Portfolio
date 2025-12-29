const express = require("express");
app = express();
const router = express.Router();
const path = require("path");

//Server 
port = 5000;
app.listen(port, ()=>{console.log(`Server listening on port ${port}`)});

//Static server
app.use(express.static(path.join((__dirname) ,"static_server")));