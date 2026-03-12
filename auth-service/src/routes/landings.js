const express = require('express');
const router = express.Router();
const Landing = require('../models/Landing');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Create a new landing
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { name, description, html, reactCode, thumbnail, provider, prompt } = req.body;

    if (!name || !html) {
      return res.status(400).json({
        success: false,
        message: 'Name and HTML are required'
      });
    }

    const landing = new Landing({
      userId: req.user.id,
      name,
      description: description || '',
      html,
      reactCode: reactCode || '',
      thumbnail: thumbnail || '',
      provider: provider || 'openai',
      prompt: prompt || ''
    });

    await landing.save();

    res.status(201).json({
      success: true,
      message: 'Landing created successfully',
      landing: {
        id: landing._id,
        name: landing.name,
        description: landing.description,
        thumbnail: landing.thumbnail,
        createdAt: landing.createdAt,
        updatedAt: landing.updatedAt
      }
    });
  } catch (error) {
    console.error('Create landing error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating landing'
    });
  }
});

// Get all landings for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = '-createdAt' } = req.query;

    const landings = await Landing.find({ userId: req.user.id })
      .select('-html -reactCode') // Exclude large fields from list
      .sort(sort)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Landing.countDocuments({ userId: req.user.id });

    res.json({
      success: true,
      landings: landings.map(landing => ({
        id: landing._id,
        name: landing.name,
        description: landing.description,
        thumbnail: landing.thumbnail,
        provider: landing.provider,
        isPublished: landing.isPublished,
        publishedUrl: landing.publishedUrl,
        views: landing.views,
        createdAt: landing.createdAt,
        updatedAt: landing.updatedAt
      })),
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalLandings: count
    });
  } catch (error) {
    console.error('Get landings error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching landings'
    });
  }
});

// Get a single landing by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const landing = await Landing.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!landing) {
      return res.status(404).json({
        success: false,
        message: 'Landing not found'
      });
    }

    res.json({
      success: true,
      landing: {
        id: landing._id,
        name: landing.name,
        description: landing.description,
        html: landing.html,
        reactCode: landing.reactCode,
        thumbnail: landing.thumbnail,
        provider: landing.provider,
        prompt: landing.prompt,
        isPublished: landing.isPublished,
        publishedUrl: landing.publishedUrl,
        views: landing.views,
        createdAt: landing.createdAt,
        updatedAt: landing.updatedAt
      }
    });
  } catch (error) {
    console.error('Get landing error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching landing'
    });
  }
});

// Update a landing
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { name, description, html, reactCode, thumbnail, isPublished, publishedUrl } = req.body;

    const landing = await Landing.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!landing) {
      return res.status(404).json({
        success: false,
        message: 'Landing not found'
      });
    }

    // Update fields if provided
    if (name !== undefined) landing.name = name;
    if (description !== undefined) landing.description = description;
    if (html !== undefined) landing.html = html;
    if (reactCode !== undefined) landing.reactCode = reactCode;
    if (thumbnail !== undefined) landing.thumbnail = thumbnail;
    if (isPublished !== undefined) landing.isPublished = isPublished;
    if (publishedUrl !== undefined) landing.publishedUrl = publishedUrl;

    await landing.save();

    res.json({
      success: true,
      message: 'Landing updated successfully',
      landing: {
        id: landing._id,
        name: landing.name,
        description: landing.description,
        thumbnail: landing.thumbnail,
        isPublished: landing.isPublished,
        publishedUrl: landing.publishedUrl,
        updatedAt: landing.updatedAt
      }
    });
  } catch (error) {
    console.error('Update landing error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating landing'
    });
  }
});

// Delete a landing
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const landing = await Landing.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!landing) {
      return res.status(404).json({
        success: false,
        message: 'Landing not found'
      });
    }

    res.json({
      success: true,
      message: 'Landing deleted successfully'
    });
  } catch (error) {
    console.error('Delete landing error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting landing'
    });
  }
});

// Increment view count
router.post('/:id/view', async (req, res) => {
  try {
    const landing = await Landing.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!landing) {
      return res.status(404).json({
        success: false,
        message: 'Landing not found'
      });
    }

    res.json({
      success: true,
      views: landing.views
    });
  } catch (error) {
    console.error('Increment view error:', error);
    res.status(500).json({
      success: false,
      message: 'Error incrementing view count'
    });
  }
});

// Publish a landing page - generates slug and makes it publicly accessible
router.post('/:id/publish', authenticateToken, async (req, res) => {
  try {
    const { slug: requestedSlug } = req.body;

    const landing = await Landing.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!landing) {
      return res.status(404).json({ success: false, message: 'Landing not found' });
    }

    // Generate slug from requested slug or landing name
    let slug = requestedSlug || landing.name;
    slug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 60);

    // Check if slug is already taken (by another landing)
    const existing = await Landing.findOne({ slug, _id: { $ne: landing._id } });
    if (existing) {
      // Append random suffix
      const suffix = Math.random().toString(36).substring(2, 6);
      slug = `${slug}-${suffix}`;
    }

    // Update landing
    landing.slug = slug;
    landing.isPublished = true;
    landing.publishedUrl = `https://codecraftt.com/site/${slug}`;
    await landing.save();

    res.json({
      success: true,
      message: 'Landing published successfully',
      landing: {
        id: landing._id,
        slug: landing.slug,
        publishedUrl: landing.publishedUrl,
        isPublished: landing.isPublished
      }
    });
  } catch (error) {
    console.error('Publish landing error:', error);
    res.status(500).json({ success: false, message: 'Error publishing landing' });
  }
});

// Unpublish a landing page
router.post('/:id/unpublish', authenticateToken, async (req, res) => {
  try {
    const landing = await Landing.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!landing) {
      return res.status(404).json({ success: false, message: 'Landing not found' });
    }

    landing.isPublished = false;
    await landing.save();

    res.json({
      success: true,
      message: 'Landing unpublished successfully'
    });
  } catch (error) {
    console.error('Unpublish error:', error);
    res.status(500).json({ success: false, message: 'Error unpublishing landing' });
  }
});

// PUBLIC: Get a published landing page by slug (no auth required)
router.get('/site/:slug', async (req, res) => {
  try {
    const landing = await Landing.findOne({
      slug: req.params.slug,
      isPublished: true
    });

    if (!landing) {
      return res.status(404).json({ success: false, message: 'Site not found' });
    }

    // Increment view count
    landing.views += 1;
    await landing.save();

    res.json({
      success: true,
      site: {
        name: landing.name,
        html: landing.html,
        slug: landing.slug,
        views: landing.views
      }
    });
  } catch (error) {
    console.error('Get site error:', error);
    res.status(500).json({ success: false, message: 'Error fetching site' });
  }
});

module.exports = router;
