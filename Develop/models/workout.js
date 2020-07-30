const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// I want to be able to log multiple exercises in a workout on a given day.
// I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
// If the exercise is a cardio exercise, I should be able to track my distance traveled.

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: new Date()
      },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout; 