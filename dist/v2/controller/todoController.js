const Router = require('express');
const router = Router();
const {
  todo
} = require('../models');
router.get('/', (req, res) => {
  todo.findAll().then(todo => {
    if (todo.length) {
      return res.status(200).json({
        message: "Todo Successfully fetched",
        todo
      });
    } else {
      return res.status(200).json({
        message: "No todo available"
      });
    }
  }).catch(error => res.status(404).send(error));
});
router.post('/posttodo', (req, res) => {
  const body = req.body;
  todo.create(body);
  try {
    return res.status(201).json({
      message: "Todo Successfully created",
      todo
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;