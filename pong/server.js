const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({data: 'Pong!'}));

app.listen(port, () => console.log(`Pong service listening on port ${port}!`));