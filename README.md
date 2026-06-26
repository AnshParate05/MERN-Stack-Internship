# 🚀 MERN Stack Internship – Maincrafts Technology

> A progressive journey through full-stack web development using the MERN stack
> (MongoDB, Express.js, React, Node.js), building real-world applications across 4 tasks.

**Intern:** Ansh Parate  
**Company:** [Maincrafts Technology](https://www.maincrafts.com)  
**Contact:** hr@maincrafts.com  
**Duration:** 20 May 2026 – 25 June 2026

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Task 1 – Basic React App + API](#task-1--basic-react-app--api)
- [Task 2 – To-Do List App (Create & Read)](#task-2--to-do-list-app-create--read)
- [Task 3 – Full CRUD To-Do App](#task-3--full-crud-to-do-app)
- [Task 4 – JWT Authentication System](#task-4--jwt-authentication-system)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [API Reference](#api-reference)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Axios, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Authentication | JWT (jsonwebtoken), bcryptjs |
| Tools | Postman, VS Code, Git |

---

## Task 1 – Basic React App + API

### 📌 Description
Built the first MERN application — a React frontend that fetches and displays product
data from an Express + MongoDB backend API. Introduced the fundamental structure of a
MERN project and how frontend communicates with backend.

### ✅ What I Built

**Backend (Express + MongoDB):**
- `GET /api/products` — Fetches all products from MongoDB
- `POST /api/products` — Adds a new product (tested via Postman)
- Product model with fields: name, price, category, description

**Frontend (React):**
- `ProductCard` component that accepts and displays props (name, price, category)
- `useEffect` to fetch products from the backend on page load
- Loading and error states handled in the UI
- Responsive product grid layout

### 💡 What I Learned
- Setting up a React project using Create React App
- Building a REST API with Express.js
- Defining Mongoose schemas and models
- Using `useState` and `useEffect` hooks
- Making GET requests from React using Axios
- React props and component-based architecture
- Connecting frontend and backend for the first time

### 📁 Folder: `task-1-products-app/`

---

## Task 2 – To-Do List App (Create & Read)

### 📌 Description
Built a full-stack To-Do List application where users can add new tasks and view all
saved tasks — covering the Create and Read operations of CRUD, and connecting React to
an Express backend with MongoDB Atlas.

### ✅ What I Built

**Backend (Express + MongoDB):**
- `POST /add` — Adds a new task to MongoDB
- `GET /tasks` — Fetches all tasks from MongoDB
- Task model with a `text` field

**Frontend (React):**
- Text input and "Add Task" button
- Task list that fetches and displays all saved tasks on page load
- New tasks appear instantly after being added

### 💡 What I Learned
- Setting up Express middleware (CORS, JSON parsing)
- Connecting to MongoDB Atlas using Mongoose
- Making POST and GET requests from React using Axios
- Managing component state with `useState`
- How frontend and backend communicate via REST APIs

### 📁 Folder: `task-2-todo/`

---

## Task 3 – Full CRUD To-Do App

### 📌 Description
Extended the Task 2 To-Do app by adding Update (Edit) and Delete features — making it
a fully functional CRUD application with real-time UI updates. Also added a checkbox
to mark tasks as completed.

### ✅ What I Built

**Backend (Express + MongoDB):**
- `PUT /update/:id` — Updates a task's text or completed status
- `DELETE /delete/:id` — Deletes a task by its MongoDB ID
- Updated Task model with `text` and `completed` fields

**Frontend (React):**
- `TaskItem` component with Edit, Save, Cancel, and Delete buttons
- Checkbox to toggle tasks as completed (with strikethrough styling)
- Inline editing — click Edit to modify task text directly
- UI updates immediately after every operation, no page reload needed

### 💡 What I Learned
- Using `PUT` and `DELETE` HTTP methods in Express
- `findByIdAndUpdate` and `findByIdAndDelete` in Mongoose
- Conditional rendering in React (edit mode vs view mode)
- Lifting state and passing callback functions between components
- Dynamic UI updates without refreshing the page

### 📁 Folder: `task-3-todo-crud/`

---

## Task 4 – JWT Authentication System

### 📌 Description
Built a complete Login and Signup system using JSON Web Tokens (JWT). Users can
register an account, log in to receive a token, access a protected dashboard, and
log out. Passwords are hashed with bcrypt before being saved to MongoDB.

### ✅ What I Built

**Backend (Express + MongoDB):**
- `POST /register` — Registers user with bcrypt-hashed password
- `POST /login` — Verifies credentials and returns a signed JWT token
- `GET /profile` — Protected route, requires valid Bearer token in header
- JWT middleware (`verifyToken`) to guard protected routes

**Frontend (React):**
- Register page — name, email, password form with validation
- Login page — stores JWT token in `localStorage` on success
- Dashboard — displays user name, email, and JWT token preview
- Logout — clears token from `localStorage` and redirects to login
- Conditional rendering based on authentication state

### 🔐 How JWT Auth Works
```
1. Register  →  Password hashed with bcrypt  →  Saved to MongoDB
2. Login     →  Password verified            →  JWT token returned
3. Token     →  Stored in localStorage       →  Sent with API requests
4. Protected →  Middleware verifies token    →  Access granted or denied
5. Logout    →  Token removed from localStorage
```

### 💡 What I Learned
- Why passwords must never be stored as plain text (bcrypt hashing)
- How JWT tokens are generated, signed, and verified
- Writing authentication middleware in Express
- Protecting routes so only logged-in users can access them
- Managing auth state on the frontend using localStorage
- Conditional rendering based on login status

### 📁 Folder: `task-4-auth/`

---

## Project Structure

```
mern-internship/
│
├── task-1-products-app/
│   ├── backend/
│   │   ├── server.js            # Express server: GET & POST /api/products
│   │   ├── package.json
│   │   └── .env.example
│   └── frontend/
│       ├── src/
│       │   ├── App.js           # Fetches and displays products
│       │   ├── ProductCard.js   # Reusable card component using props
│       │   ├── App.css
│       │   └── index.js
│       └── package.json
│
├── task-2-todo/
│   ├── backend/
│   │   ├── server.js            # POST /add, GET /tasks
│   │   ├── package.json
│   │   └── .env.example
│   └── frontend/
│       ├── src/
│       │   ├── App.js           # Add task + display task list
│       │   ├── App.css
│       │   └── index.js
│       └── package.json
│
├── task-3-todo-crud/
│   ├── backend/
│   │   ├── server.js            # Full CRUD: POST, GET, PUT, DELETE
│   │   ├── package.json
│   │   └── .env.example
│   └── frontend/
│       ├── src/
│       │   ├── App.js           # CRUD logic: add, update, delete, toggle
│       │   ├── TaskItem.js      # Per-task: edit/delete/checkbox
│       │   ├── App.css
│       │   └── index.js
│       └── package.json
│
├── task-4-auth/
│   ├── backend/
│   │   ├── server.js            # Register, Login, Protected /profile
│   │   ├── package.json
│   │   └── .env.example
│   └── frontend/
│       ├── src/
│       │   ├── App.js           # Auth routing logic
│       │   ├── Register.js      # Signup form
│       │   ├── Login.js         # Login form
│       │   ├── Dashboard.js     # Protected user dashboard
│       │   ├── App.css
│       │   └── index.js
│       └── package.json
│
└── README.md
```

---

## How to Run

### Prerequisites
- Node.js v18+
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) account
- Git

### Steps (same for every task)

**1. Clone the repo**
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <task-folder>
```

**2. Setup backend**
```bash
cd backend
npm install
```
Open `server.js` and replace `"your_mongodb_url"` with your MongoDB Atlas URI:
```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>
```
Start the server:
```bash
npm start
# Server runs on http://localhost:5000
```

**3. Setup frontend**
```bash
cd frontend
npm install
npm start
# App runs on http://localhost:3000
```

---

## API Reference

### Task 1 – Products API

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/products` | Get all products | No |
| POST | `/api/products` | Add a product | No |

### Task 2 & 3 – To-Do API

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/tasks` | Get all tasks | No |
| POST | `/add` | Add a new task | No |
| PUT | `/update/:id` | Edit task text or completed status | No |
| DELETE | `/delete/:id` | Delete a task | No |

### Task 4 – Auth API

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/register` | Register new user (hashed password) | No |
| POST | `/login` | Login and receive JWT token | No |
| GET | `/profile` | Get logged-in user's profile | Bearer token |

---

## 🙏 Acknowledgements

Thanks to **Maincrafts Technology** for this internship and for the structured task
progression that took me from basic React components all the way to full-stack MERN
development with JWT authentication.

