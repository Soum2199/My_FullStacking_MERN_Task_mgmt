const Mongoose = require("mongoose")

const taskSchema = new Mongoose.Schema({
    title: {type: String, required: true},
    completed: {type:Boolean, default: false}
})

module.exports = Mongoose.model("Task", taskSchema)
