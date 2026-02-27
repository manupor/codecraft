const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d';

// @route   POST /api/auth/google
// @desc    Handle Google OAuth login/signup
// @access  Public
router.post('/google', async (req, res) => {
  try {
    const { email, name, googleId } = req.body;

    if (!email || !name || !googleId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user with Google OAuth
      user = new User({
        email,
        name,
        password: `google_${googleId}_${Date.now()}`, // Random password for Google users
        googleId,
        authProvider: 'google'
      });

      await user.save();
      console.log(`✅ New Google user created: ${email}`);
    } else {
      // Update existing user with Google ID if not set
      if (!user.googleId) {
        user.googleId = googleId;
        user.authProvider = 'google';
        await user.save();
      }
      
      // Update last login
      user.lastLogin = new Date();
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        plan: user.plan,
        authProvider: user.authProvider || 'email'
      }
    });
  } catch (error) {
    console.error('Google auth error:', error);
    res.status(500).json({ error: 'Server error during Google authentication' });
  }
});

module.exports = router;
