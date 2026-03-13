const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Addidas";
  let searchText = "Search Now";
  res.render("index", {
    siteName,
    searchText,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "addidas why and when?";
  let blogContent = "it's a very good brand"; 
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
