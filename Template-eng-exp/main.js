const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => { 
  let siteName = "Addidas";
  let searchText = "Search Now";
  let arr =[1,54,60];
  res.render("index", {
    siteName,
    searchText,
    arr
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "addidas why and when?";
  let blogContent = "it's a very good brand"; 
  res.render("blogpost", {
    blogTitle,
    blogContent,
  });
}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 
