const express = require('express');
const router = express.Router();

// Example route
router.get('/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

router.post('/users', (req, res) => {
  res.json({ message: 'Create new user' });
});

router.get('/users/:id', (req, res) => {
  res.json({ message: `Get user with id ${req.params.id}` });
});

router.put('/users/:id', (req, res) => {
  res.json({ message: `Update user with id ${req.params.id}` });
});

router.delete('/users/:id', (req, res) => {
  res.json({ message: `Delete user with id ${req.params.id}` });
});

module.exports = router;
