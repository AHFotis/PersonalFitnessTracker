const router = require("express").Router();
const Workout = require("../models/workout.js");

//retrieves all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {

});

router.put("/api/workouts/:id", (req, res) => {

});

router.get("/api/workouts/range", (req, res) => {

});

module.exports = router