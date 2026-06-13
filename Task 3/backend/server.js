const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB (replace with your MongoDB Atlas connection string)
mongoose.connect("your_mongodb_url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    text: String,
    completed: { type: Boolean, default: false },
  })
);

// Add new task
app.post("/add", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.send(newTask);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Update task by ID (edit text and/or toggle completed)
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedTask);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Delete task by ID
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.send({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
