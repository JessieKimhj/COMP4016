const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get('/foo', (req, res) => {
  res.send('bar');
});

app.post('/hello', (req, res) => {
  const name = req.body.name || 'World';
  res.json({ message: `Hello ${name}!` });
});

app.get('/kill', (req, res) => {
  process.exit(0); // Exit the application
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});