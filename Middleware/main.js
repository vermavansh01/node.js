const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs")

app.use(express.static("public"));

// Middleware 1

app.use((req, res, next) => {
  console.log("M1");  
  console.log(req.headers);  
  req.harry =56
  fs.appendFileSync("logs.txt",` ${Date.now()} is a ${req.method}`)
  console.log(`${Date.now()}is a${req.method}`);
  //   res.send('middleware1')
  next();
});

// Middleware 2

app.use((req, res, next) => {
  console.log("M2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!" + req.harry);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
