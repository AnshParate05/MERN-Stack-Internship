# MERN Stack Internship – Task 2 & 3: To-Do List App (Full CRUD)

A full MERN (MongoDB, Express, React, Node.js) To-Do List application with complete
Create, Read, Update, and Delete functionality.

## Project Structure
```
mern-todo/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js
    │   ├── App.css
    │   ├── TaskItem.js
    │   └── index.js
    └── package.json
```

## Setup Instructions

### 1. Backend Setup
```bash
cd backend
npm install
```

- Create a MongoDB Atlas cluster (free tier) at https://www.mongodb.com/atlas
- Get your connection string and replace `"your_mongodb_url"` in `server.js`
  with it (e.g. `mongodb+srv://<user>:<password>@cluster.mongodb.net/todoapp`)
- Start the server:
```bash
npm start
```
Server runs on `http://localhost:5000`

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```
App runs on `http://localhost:3000`

## API Routes
- `POST /add` — Add a new task. Body: `{ "text": "Task name" }`
- `GET /tasks` — Get all tasks
- `PUT /update/:id` — Update a task (edit text and/or mark completed). Body: `{ "text": "...", "completed": true }`
- `DELETE /delete/:id` — Delete a task

## Features
- Add new tasks
- View all tasks fetched from MongoDB
- Edit task text inline
- Delete tasks
- Mark tasks as completed via checkbox (with strikethrough styling)

## How It Works
1. React frontend sends a POST request to `/add` when "Add Task" is clicked.
2. Each task renders as a `TaskItem` with a checkbox, Edit and Delete buttons.
3. Editing switches the item into an input field; "Save" sends a PUT request to `/update/:id`.
4. Checking the box also sends a PUT request to toggle the `completed` field.
5. Delete sends a DELETE request to `/delete/:id` and removes the task from the UI.

## Testing
Use Postman to test:
- `GET http://localhost:5000/tasks`
- `POST http://localhost:5000/add` with JSON body `{ "text": "Buy groceries" }`
- `PUT http://localhost:5000/update/<id>` with JSON body `{ "text": "Buy milk", "completed": true }`
- `DELETE http://localhost:5000/delete/<id>`
