// friendsRoutes.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Friend = require('../models/Friend');
const User = require('../models/User');

router.use(bodyParser.json());

// Create a new friendship
router.post('/', async (req, res) => {
  try {
    const { user_id, friend_user_id } = req.body;

    // Check if the friendship already exists
    const existingFriendship = await Friend.findOne({
      where: { user_id, friend_user_id },
    });

    if (existingFriendship) {
      return res.status(400).json({ error: 'Friendship already exists' });
    }

    const newFriendship = await Friend.create({ user_id, friend_user_id });
    res.status(201).json(newFriendship);
  } catch (error) {
    console.error('Error creating friendship:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Remove a friend
router.delete('/:userId/:friendUserId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const friendUserId = req.params.friendUserId;

    // Check if the friendship exists
    const friendshipToRemove = await Friend.findOne({
      where: { user_id: userId, friend_user_id: friendUserId },
    });

    if (!friendshipToRemove) {
      return res.status(404).json({ error: 'Friendship not found' });
    }

    // Remove the friendship
    await friendshipToRemove.destroy();

    res.status(204).send();
  } catch (error) {
    console.error('Error removing friend:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Are they friends both ways?
router.get('/are-friends/:userId/:friendUserId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const friendUserId = req.params.friendUserId;

    // Check if the friendship exists in both directions
    const friendship1 = await Friend.findOne({
      where: {
        user_id: userId,
        friend_user_id: friendUserId,
      },
    });

    const friendship2 = await Friend.findOne({
      where: {
        user_id: friendUserId,
        friend_user_id: userId,
      },
    });

    const areFriends = !!(friendship1 && friendship2);

    res.json(areFriends);
  } catch (error) {
    console.error('Error checking friendship:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
