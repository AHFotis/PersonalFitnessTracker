const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String, 
            trim: true,
            required: "Please enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter an exercise name"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Please enter a duration in minutes"
        },
        weight: {
            type: Number,
            trim: true,
        },
       reps: {
            type: Number,
            trim: true,
        },
        sets: {
            type: Number,
            trim: true,
        },
        distance: {
            type: Number,
            trim: true,
        },
    }]
}, {
    toJSON: {
        virtuals: true
    }
});

// https://mongoosejs.com/docs/guide.html#virtuals, https://mongoosejs.com/docs/tutorials/virtuals.html
WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;