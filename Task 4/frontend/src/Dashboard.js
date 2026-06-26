import React from "react";

function Dashboard({ user, onLogout }) {
  const token = localStorage.getItem("token");

  return (
    <div className="auth-wrapper">
      <div className="dashboard-card">
        <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
        <h2>Welcome, {user.name}!</h2>
        <p className="subtitle">You are successfully logged in.</p>
        <div className="info-box">
          <div className="info-row">
            <span className="label">Name</span>
            <span>{user.name}</span>
          </div>
          <div className="info-row">
            <span className="label">Email</span>
            <span>{user.email}</span>
          </div>
          <div className="info-row">
            <span className="label">JWT Token</span>
            <span className="token-preview">{token?.slice(0, 30)}...</span>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
