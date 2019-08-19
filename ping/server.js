const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 4000;
const PONG_API_URL = process.env.PONG_API_URL || "http://localhost:5000"

app.get('/', (req, res) => res.json({data: 'Ping alive!'}));
app.get('/ping', (req, res) => {
  request(PONG_API_URL).pipe(res);
});

app.listen(port, () => console.log(`Ping service listening on port ${port}!`));