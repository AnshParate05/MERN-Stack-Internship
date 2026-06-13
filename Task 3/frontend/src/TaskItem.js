import React, { useState } from "react";

function TaskItem({ task, onDelete, onUpdate, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (!newText.trim()) return;
    onUpdate(task._id, { text: newText });
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task._id, !task.completed)}
      />

      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSave()}
            autoFocus
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => { setIsEditing(false); setNewText(task.text); }}>Cancel</button>
        </>
      ) : (
        <>
          <span className={task.completed ? "task-text completed" : "task-text"}>
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
