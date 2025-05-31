import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.locals.header = "Enter your name below 👇"
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  let nameLength = req.body["fName"].length + req.body["lName"].length;
  res.locals.header = `There are ${nameLength} letters in your name.`
  res.render("index.ejs")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function nameLength(){

};