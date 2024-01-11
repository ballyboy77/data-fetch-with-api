const express = require("express");
const App = express();
App.use(express.json());


App.get("/",(req,res)=>{
    res.send("<h1>Data fetched from express")
})
App.listen("3000")