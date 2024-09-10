// import express from "express";

const express = require("express");

require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello backend</h1>");
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/youtube", (req, res) => {
  res.send("youtube.com");
});

app.get("/youtube/chai", (req, res) => {
  res.json({
    1: "tata",
    2: "taaj",
    3: "waghbakri",
  });
});

// const port = process.env.PORT;
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
