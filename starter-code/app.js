const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static("public"));
app.set("view engine","hbs");

// app.set("views",__dirname,"/views");
hbs.registerPartials(__dirname + "/views/partials");



app.get("/",(req,res,next)=>{
  res.render("index.hbs");
})

app.get("/about",(req,res,next)=>{
  res.render("about")
})

app.get("/gallery",(req,res,next)=>{
  res.render("gallery");
})





const listener= app.listen(2590,()=>{
  console.log("app/hbs started @ http://localhost:" + listener.address().port);
})