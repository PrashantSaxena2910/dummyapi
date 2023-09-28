const express = require('express');
const router = express.Router();
const axios = require('axios');
const User = require('../models/user');
const UserPreview = require('../models/userPreview');

// Define a route to fetch and store users
router.get('/fetch-users', async (req, res) => {
  try {
    const response = await axios.get('https://dummyapi.io/data/v1/user', {
      headers: {
        'app-id': '6513df832a87844d4431393b', // Replace with your app_id
      },
    });

    // Store the fetched users in the MongoDB "users" collection
    await User.insertMany(response.data.data);
    res.status(200).json({ message: 'Users data fetched and stored successfully.' });
  } catch (error) {
    console.error('Error fetching and storing users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
