const { Router } = require("express");
const {getTodo, addTodo} = require("./controllers");

const router = Router();

router.get('/',  getTodo)
router.post('/add', addTodo);

module.exports = router