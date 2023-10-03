const express = require('express');
require('dotenv').config();
const todoRoutes = require('./todoRoutes');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.status(200).json({
    message: 'welcome to our endpoint'
  });
});
app.use('/api/v1/todo', todoRoutes);
app.listen(PORT, (req, res) => {
  console.log(`Server is up and running on  ${PORT}`);
});
module.exports = app;