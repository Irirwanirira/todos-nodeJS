const express = require('express');
const todoRoutes = require('./src/todoRoutes');

const app = express();
app.use(express.json())

const PORT  = 4000;

app.use('/', todoRoutes)

app.listen(PORT, (req, res) => {
  console.log('Server is up and running on ' + PORT);
})




