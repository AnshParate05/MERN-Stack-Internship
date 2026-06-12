import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  // Fetch tasks from backend
  const fetchTasks = () => {
    axios.get("http://localhost:5000/tasks").then((res) => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const addTask = () => {
    if (!text.trim()) return alert("Task cannot be empty!");
    axios.post("http://localhost:5000/add", { text }).then((res) => {
      setTasks([...tasks, res.data]);
      setText("");
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
      <ul>
        {tasks.map((t) => (
          <li key={t._id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
