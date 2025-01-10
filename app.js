const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Learn Git Merging!");
});

const server = app.listen(3000, () => {
    console.log("Listening to port 3000.");
});

module.exports = server;
