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

//create new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {

});

router.get("/api/workouts/range", (req, res) => {

});

module.exports = router