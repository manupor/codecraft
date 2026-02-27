const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const googleAuthRoutes = require('./routes/google-auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'auth-service' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', googleAuthRoutes);

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/devfactory';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Auth service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

module.exports = app;
