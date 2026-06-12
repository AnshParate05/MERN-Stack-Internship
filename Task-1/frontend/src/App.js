import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import api from './services/api';

function App() {
  const [serverStatus, setServerStatus] = useState('Loading...');

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await api.get('/health');
        setServerStatus(response.data.status);
      } catch (error) {
        setServerStatus('Server is offline');
      }
    };

    checkServer();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>MERN Stack Application</h1>
          <h3>Task 1</h3>
          <p>Server Status: {serverStatus}</p>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
