import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function Register({ onSwitch }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(""); setMessage("");
    try {
      const res = await axios.post(`${API}/register`, form);
      setMessage(res.data.message);
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
      <p className="switch-link">Already have an account? <span onClick={onSwitch}>Login</span></p>
    </form>
  );
}

export default Register;
