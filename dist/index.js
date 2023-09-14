const express = require('express');
const {
  default: router
} = require('./src/todoRoutes');
const app = express();
const PORT = 4000;
app.use('/', router);
app.listen(PORT, (req, res) => {
  console.log('Server is up and running on ' + PORT);
});