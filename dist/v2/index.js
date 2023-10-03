const express = require('express');
require('dotenv').config();
const db = require('./models');
const todo = require('./controller/todoController');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.status(200).json({
    message: 'welcome to our endpoint'
  });
});
app.use('/api/v2/todo', todo);
db.sequelize
// .sync()
.sync({
  force: true
}).then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server is up and running on  ${PORT}`);
  });
}).catch(err => {
  err;
});