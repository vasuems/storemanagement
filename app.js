const express = require("express");

const app = express();

app.get("/api/authentication", (req, res) => res.send("Hello World!"));

app.get("/api/products", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => console.log("Running on port 8080!"));
