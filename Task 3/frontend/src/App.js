import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import "./App.css";

const API_URL = "http://localhost:5000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  // Fetch tasks from backend
  const fetchTasks = () => {
    axios.get(`${API_URL}/tasks`).then((res) => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const addTask = () => {
    if (!text.trim()) return alert("Task cannot be empty!");
    axios.post(`${API_URL}/add`, { text }).then((res) => {
      setTasks([...tasks, res.data]);
      setText("");
    });
  };

  // Update task (edit text or toggle completed)
  const updateTask = (id, updates) => {
    axios.put(`${API_URL}/update/${id}`, updates).then((res) => {
      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
    });
  };

  // Toggle completed checkbox
  const toggleComplete = (id, completed) => {
    updateTask(id, { completed });
  };

  // Delete task
  const deleteTask = (id) => {
    axios.delete(`${API_URL}/delete/${id}`).then(() => {
      setTasks(tasks.filter((t) => t._id !== id));
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="App">
      <h1>MERN To-Do App</h1>
      <div className="input-container">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((t) => (
          <TaskItem
            key={t._id}
            task={t}
            onDelete={deleteTask}
            onUpdate={updateTask}
            onToggle={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
