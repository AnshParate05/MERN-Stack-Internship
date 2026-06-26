import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    return token && userData ? JSON.parse(userData) : null;
  });

  const handleLogin = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setPage("login");
  };

  if (user) return <Dashboard user={user} onLogout={handleLogout} />;

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="tab-buttons">
          <button
            className={page === "login" ? "active" : ""}
            onClick={() => setPage("login")}
          >Login</button>
          <button
            className={page === "register" ? "active" : ""}
            onClick={() => setPage("register")}
          >Register</button>
        </div>
        {page === "login" ? (
          <Login onLogin={handleLogin} onSwitch={() => setPage("register")} />
        ) : (
          <Register onSwitch={() => setPage("login")} />
        )}
      </div>
    </div>
  );
}

export default App;
