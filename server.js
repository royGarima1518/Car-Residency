const express = require('express');
const mongoose = require('mongoose');
const app = express();                      
const User = require('./models/userModel');
require('dotenv').config();

const port = 3500;
const base = `${__dirname}/public`;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${base}/login.html`);
    console.log(base);
  });

  app.get('/resident.js', (req, res) => {
    res.sendFile(`${base}/resident.js`);
  });

  app.get('/login.js', (req, res) => {
    res.sendFile(`${base}/login.js`);
  });


  app.get('/parking.js', (req, res) => {
    res.sendFile(`${base}/parking.js`);
  });

  app.get('/create_account.html', (req, res) => {
    res.sendFile(`${base}/create_account.html`);
  });

  app.get('/login_existing.html', (req, res) => {
    res.sendFile(`${base}/login_existing.html`);
  });

  app.get('/resident.html', (req, res) => {
    res.sendFile(`${base}/resident.html`);
  });

  app.get('/login.html', (req, res) => {
    res.sendFile(`${base}/login.html`);
  });

  app.get('/residentuser.html', (req, res) => {
    res.sendFile(`${base}/residentuser.html`);
  });

  app.get('/nonresidentuser.html', (req, res) => {
    res.sendFile(`${base}/nonresidentuser.html`);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
});