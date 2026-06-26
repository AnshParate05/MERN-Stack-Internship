import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function Login({ onLogin, onSwitch }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const res = await axios.post(`${API}/login`, form);
      onLogin(res.data.user, res.data.token);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>
      {error && <p className="error">{error}</p>}
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      <p className="switch-link">No account? <span onClick={onSwitch}>Register</span></p>
    </form>
  );
}

export default Login;
