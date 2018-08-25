require('babel-register');

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('im having sex w ur mother app listening on port 3000!'));