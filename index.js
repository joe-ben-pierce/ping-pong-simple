const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://10.0.0.166:${port}`);
});
