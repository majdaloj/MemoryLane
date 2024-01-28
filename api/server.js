// server.js
const express = require('express');
const sequelize = require('./db/sequelize');
const User = require('./models/User');
const Memory = require('./models/Memory');
const UserBoundary = require('./models/UserBoundary');
const FriendRequest = require('./models/FriendRequests');
const Friend = require('./models/Friend');

const sendMemoryRouter = require('./routes/send-memory');

const userRoutes = require('./routes/userRoutes');
const memoryRoutes = require('./routes/memoryRoutes');
const userBoundaryRoutes = require('./routes/boundaryRoutes');
const friendRoutes = require('./routes/friendsRoutes');

const app = express();
const port = process.env.PORT || 8080;

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');

    // Sync models with the database
    await sequelize.sync({ force: false });
    console.log('Models synced with the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

// Call the syncDatabase function to authenticate and sync models
syncDatabase();

// Ensure the database connection is closed gracefully on application termination
process.on('SIGINT', () => {
  console.log('Closing the database connection pool...');
  sequelize.close().then(() => {
    console.log('Database connection pool closed.');
    process.exit(0);
  });
});

app.use(express.json());
app.use('/schedule', sendMemoryRouter);

// Use the routes for endpoints
app.use('/api/users', userRoutes);
app.use('/api/memories', memoryRoutes);
app.use('/api/user-boundaries', userBoundaryRoutes);
app.use('/api/friends', friendRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
