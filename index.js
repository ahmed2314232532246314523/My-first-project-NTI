const express = require("express");

const app = express();

app.get("/",(req,res) => {
  res.send("hello new project")
});


app.get("/name",(req,res) => {
  res.send("name : Ahmed Hashesh")
})

app.put("/test" , (req,res) => {
  res.send("Hallo Worled")
})

app.post("/newcomint" , (req,res) => {
  res.send("Post Recoust on add comment")
})

app.listen(3000 , () => {
  console.log("I am Listen in port 3000")
});
