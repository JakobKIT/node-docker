const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Express + Docker</h1>
    <span>This projects runs inside a Docker container</span>
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});