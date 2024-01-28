// memoryRoutes.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Memory = require('../models/Memory'); // Adjust the import path
const User = require('../models/User');

router.use(bodyParser.json());

// Create a memory
router.post('/', async (req, res) => {
  try {
    const {
      from_user_id,
      for_user_id,
      send_time,
      media_type,
      media_link,
      text,
      state,
    } = req.body;

    const newMemory = await Memory.create({
      from_user_id,
      for_user_id,
      send_time,
      media_type,
      media_link,
      text,
      state,
    });

    res.status(201).json(newMemory);
  } catch (error) {
    console.error('Error creating memory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all memories
router.get('/', async (req, res) => {
  try {
    const memories = await Memory.findAll();
    res.json(memories);
  } catch (error) {
    console.error('Error fetching memories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Archive a memory
router.put('/:memoryId/archive', async (req, res) => {
  try {
    const memoryId = req.params.memoryId;
    const memory = await Memory.findByPk(memoryId);

    if (!memory) {
      return res.status(404).json({ error: 'Memory not found' });
    }

    // Update the memory to mark it as archived
    await memory.update({ state: 'archived' });

    res.json(memory);
  } catch (error) {
    console.error('Error archiving memory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
