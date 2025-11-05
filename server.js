// server.js - Backend Code
const express = require('express');
const app = express();
app.use(express.json());

// Your deployed contract addresses
const CONTRACT_ADDRESS = '0x3fa8271e96a29d570f4766aaeabea3aa2df7a9ec';

app.get('/', (req, res) => {
  res.json({ status: 'online' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
