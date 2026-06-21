const mongoose = require('mongoose');

const landingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  html: {
    type: String,
    required: true
  },
  reactCode: {
    type: String,
    default: ''
  },
  thumbnail: {
    type: String,
    default: ''
  },
  provider: {
    type: String,
    enum: ['openai', 'anthropic', 'perplexity', 'grok'],
    default: 'openai'
  },
  prompt: {
    type: String,
    default: ''
  },
  slug: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true
  },
  customDomain: {
    type: String,
    default: ''
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedUrl: {
    type: String,
    default: ''
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
landingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for faster queries
landingSchema.index({ userId: 1, createdAt: -1 });
landingSchema.index({ slug: 1 }, { unique: true, sparse: true });

const Landing = mongoose.model('Landing', landingSchema);

module.exports = Landing;
