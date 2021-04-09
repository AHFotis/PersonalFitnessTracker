var path = require("path");
const app = require("express").Router()

//render homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

//render stats page
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

//render exercise page
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

module.exports = app;