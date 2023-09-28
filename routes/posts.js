const express = require('express');
const router = express.Router();
const axios = require('axios');
const Post = require('../models/post');
const User =require('../models/user')
const UserPreview = require('../models/userPreview');

// Define a route to fetch and store user posts by user ID
router.get('user/fetch-posts/?userId', async (req, res) => {
  
  const axios = require('axios');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://dummyapi.io/data/v1/user/${userId}/post',
    headers: { 
      'app-id': '6513df832a87844d4431393b'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;
