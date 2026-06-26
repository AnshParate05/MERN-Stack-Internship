# MERN Stack Internship – Task 4: JWT Authentication

A full MERN authentication system with Register, Login, Protected Routes, and Dashboard.

## Project Structure
```
mern-auth/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── public/index.html
    ├── src/
    │   ├── App.js
    │   ├── App.css
    │   ├── Register.js
    │   ├── Login.js
    │   └── Dashboard.js
    └── package.json
```

## Setup

### Backend
```bash
cd backend
npm install
```
- Replace `"your_mongodb_url"` in server.js with your MongoDB Atlas URI
- Start: `npm start` → runs on http://localhost:5000

### Frontend
```bash
cd frontend
npm install
npm start
```
→ runs on http://localhost:3000

## API Routes
| Method | Route       | Description                          | Auth Required |
|--------|-------------|--------------------------------------|---------------|
| POST   | /register   | Register new user (password hashed) | No            |
| POST   | /login      | Login → returns JWT token            | No            |
| GET    | /profile    | Get logged-in user profile           | Yes (Bearer)  |

## How JWT Auth Works
1. User registers → password is hashed with bcrypt and saved to MongoDB.
2. User logs in → server verifies password, returns a signed JWT token.
3. Frontend stores token in localStorage.
4. Protected routes require `Authorization: Bearer <token>` header.
5. Logout clears the token from localStorage.

## Testing with Postman
- POST `/register` → body: `{ "name": "John", "email": "john@test.com", "password": "123456" }`
- POST `/login`    → body: `{ "email": "john@test.com", "password": "123456" }`
- GET  `/profile`  → header: `Authorization: Bearer <token from login>`
