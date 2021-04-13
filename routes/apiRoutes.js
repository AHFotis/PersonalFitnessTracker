const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

//retrieves all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

//create new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

//add exercise to workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,
        {$push: {exercises: body}},
        {new: true}
    ).then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
});

//returns data to states page. need to study aggregates for this.
router.get("/api/workouts/range", (req, res) => {
Workout.aggregate([
  {
      $addFields: {
          totalWeight: { $sum: "$exercises.weight" },
          totalDuration: { $sum: "$exercises.duration" }
      }
  },
])
.sort({ day: - 1 }).limit(7).sort( { day: 1 })
.then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router