# MERN Stack Internship – Task 2: To-Do List App

A full MERN (MongoDB, Express, React, Node.js) To-Do List application.

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

## How It Works
1. React frontend sends a POST request to `/add` when "Add Task" is clicked.
2. Express backend saves the task to MongoDB via Mongoose.
3. React fetches all tasks from `/tasks` on load and after adding a new task,
   then displays them in a list.

## Testing
Use Postman to test:
- `GET http://localhost:5000/tasks`
- `POST http://localhost:5000/add` with JSON body `{ "text": "Buy groceries" }`
