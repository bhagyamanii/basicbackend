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

app.get("/github", (req, res) => {
  res.json({
    login: "bhagyamanii",
    id: 144342795,
    node_id: "U_kgDOCJp_Cw",
    avatar_url: "https://avatars.githubusercontent.com/u/144342795?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/bhagyamanii",
    html_url: "https://github.com/bhagyamanii",
    followers_url: "https://api.github.com/users/bhagyamanii/followers",
    following_url:
      "https://api.github.com/users/bhagyamanii/following{/other_user}",
    gists_url: "https://api.github.com/users/bhagyamanii/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/bhagyamanii/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/bhagyamanii/subscriptions",
    organizations_url: "https://api.github.com/users/bhagyamanii/orgs",
    repos_url: "https://api.github.com/users/bhagyamanii/repos",
    events_url: "https://api.github.com/users/bhagyamanii/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/bhagyamanii/received_events",
    type: "User",
    site_admin: false,
    name: null,
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 6,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2023-09-07T11:34:58Z",
    updated_at: "2024-09-10T11:46:42Z",
  });
});

// const port = process.env.PORT;
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
