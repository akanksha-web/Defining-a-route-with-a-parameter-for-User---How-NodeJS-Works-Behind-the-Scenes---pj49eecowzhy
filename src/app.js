const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
  //Write a code here for endpoint /user/:userId and also print parameter in json form
  const userId = req.params.userId;
  if(!userId){
    res.status(400).json({ error: "userId might be missing or invalid"});
  }
  res.status(200).json({userId:  userId})
});

module.exports = app;
