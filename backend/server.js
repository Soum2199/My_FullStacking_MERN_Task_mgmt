const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const tasks = require("./Task")
const app = express();
//  Current IP Address (114.79.136.95/32) added! to my mongodb atlas it is keep changing
app.use(cors())
app.use(bodyParser.json());
// app.use(express.urlencoded())
app.use(express.json())

// mongoose.connect("mongodb+srv://Sweety:spani99@cluster0.pk8r1.mongodb.net/taskdatabase?retryWrites=true&w=majority&appName=Cluster0")

mongoose.connect("mongodb+srv://Sweety:spani99@cluster0.pk8r1.mongodb.net/taskdatabase?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

//   mongodb+srv://Sweety:spani99@cluster0.pk8r1.mongodb.net/taskdatabase?retryWrites=true&w=majority&appName=Cluster0

const tir = new mongoose.Schema({
    id:{
        type: Number,
        unique: true
    },
    title:{
        type: String,
        unique: false
    },
    description:{
        type: String,
        unique: false
    },
    status:{
        type: String,
        unique: false
    },
    due_date:{
        type: String,
        unique: false
    }
})

// const hie = mongoose.model("taskscollection", tir)
const hie = mongoose.model("taskscollections", tir)

app.get("/fetching/all/tasks",  (req, res) => {
    hie.find().then(function (result) {
        console.log(result)
        res.json(result)
    })
})

// Get the output
app.post("/collecting/taskscollection", async (req, res) => {
    // console.log(req.body)
    const tk = req.body
    // console.log(tk)
    const fyd = new hie({
        id: tk.id,
        title: tk.title,
        description: tk.description,
        status: tk.status,
        due_date: tk.due_date
    })
    fyd.save()
    res.send("Finally data send success!.")
})

// Creating the signin schema
const singing = new mongoose.Schema({
    username : String,
    email: String,
    password: String
})
const sing2 = mongoose.model("signins", singing)

app.post("/signin", function (req, res) {
    console.log(req.body)
const signupDetails = req.body
const SigninData = new sing2({
 username: signupDetails.myUsername,
 email: signupDetails.myEmail,
 password: signupDetails.myPassword
})
if(signupDetails.myPassword == signupDetails.myConfirmPassword){
 SigninData.save()
 return res.send("Successfully registered!")
}
else{
 return res.send("passwords dont match")
}
})

app.post("/create", async function (req, res) {
    console.log(req.body)
    const miTitle = req.body.title
    const miDescription = req.body.description
    const miStatus = req.body.status
    const miDueDate = req.body.due_date
    hie.create({title: miTitle, description: miDescription, status:miStatus, due_date: miDueDate})
    .then(tasks => console.log(tasks))
    .catch(err => console.log(err))
})
app.get("/create", async function (req, res) {
    console.log(req.body)  
    const titles = req.body.title
    const descciptions = req.body.description
    const states = req.body.status
    const dueDates = req.body.due_date
    hie.find({})
    .then(rescue => res.json(rescue))
    .catch(err => res.json(err))
})
// app.get("/update/:id", async function (req, res) {
//     console.log(req.params)
//     const ied = req.params.id
//     hie.findById({id: ied})
// })

// app.put("/update/:id", async function(req, res) {
//     console.log(req.params)
// })

// Get a task by id
app.get("/update/:id", async (req, res) => {
    try {
      const task = await hie.findById(req.params.id);
      res.json(task);
    } catch (error) {
      res.status(500).send("Task not found");
    }
  });
  
  // Update a task by id  In your backend (Express.js)
app.put("/update/:id", async function (req, res) {
  const taskId = req.params.id; // Get the task ID from the URL
  const { title, description, status, due_date } = req.body; // Get the updated task details from the request body

  try {
    // Update the task in the database
    const updatedTask = await hie.findOneAndUpdate(
      { id: taskId }, // Find the task by ID
      { title, description, status, due_date }, // Update fields
      { new: true } // Return the updated task
    );

    if (updatedTask) {
      res.json(updatedTask); // Send the updated task back
    } else {
      res.status(404).json({ message: "Task not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});


// app.delete("/delete/:id", async function (req, res) {
//     console.log(req.params)
// })

app.delete("/delete/:id", async function (req, res) {
  const taskId = req.params.id;
  try {
    const deletedTask = await hie.findOneAndDelete({ id: taskId });
    if (deletedTask) {
      res.json({ message: "Task deleted successfully!" });
    } else {
      res.status(404).json({ message: "Task not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));