var path = require("path");
const router = require("express").Router()

//render homepage
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

//render stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

//render exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

module.exports = router;