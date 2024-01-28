// userBoundaryRoutes.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const UserBoundary = require('../models/UserBoundary');
const User = require('../models/User');

router.use(bodyParser.json());

const checkUserBoundaries = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const userBoundary = await UserBoundary.findOne({
      where: { user_id: userId },
    });

    if (!userBoundary) {
      return res
        .status(404)
        .json({ error: 'No User boundaries found for the user' });
    }

    // Attach user boundary to the request for further use
    req.userBoundary = userBoundary;
    next();
  } catch (error) {
    console.error('Error checking user boundaries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a user boundary for a specific user
router.post('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { blocked_keywords } = req.body;

    // Check if the user already has boundaries
    const existingUserBoundary = await UserBoundary.findOne({
      where: { user_id: userId },
    });
    if (existingUserBoundary) {
      return res
        .status(400)
        .json({ error: 'User boundaries already exist for the user' });
    }

    const newUserBoundary = await UserBoundary.create({
      user_id: userId,
      blocked_keywords,
    });

    res.status(201).json(newUserBoundary);
  } catch (error) {
    console.error('Error creating user boundary:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get user boundaries for a specific user
router.get('/:userId', checkUserBoundaries, (req, res) => {
  res.json(req.userBoundary);
});

// Update a user boundary for a specific user
router.put('/:userId', checkUserBoundaries, async (req, res) => {
  try {
    const { blocked_keywords } = req.body;

    // Update the user boundary
    await req.userBoundary.update({ blocked_keywords });

    res.json(req.userBoundary);
  } catch (error) {
    console.error('Error updating user boundary:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user boundary for a specific user
router.delete('/:userId', checkUserBoundaries, async (req, res) => {
  try {
    // Delete the user boundary
    await req.userBoundary.destroy();

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user boundary:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
