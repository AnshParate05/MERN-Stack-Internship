import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles/Home.css';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/users');
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <h2>Welcome to MERN Stack Task 1</h2>
      <p>Full-stack JavaScript application with MongoDB, Express, React, and Node.js</p>
      
      {loading && <p>Loading users...</p>}
      {error && <p className="error">{error}</p>}
      
      <div className="content">
        <h3>Users List</h3>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user._id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
