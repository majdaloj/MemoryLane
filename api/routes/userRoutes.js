// userRoutes.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/User'); // Adjust the import path

router.use(bodyParser.json());

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user
router.put('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, email, password } = req.body;

    // Find the user by user_id
    const user = await User.findByPk(userId);

    // If the user doesn't exist
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user
    await user.update({ username, email, password });

    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user
router.delete('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the user by user_id
    const user = await User.findByPk(userId);

    // If the user doesn't exist
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user
    await user.destroy();

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
