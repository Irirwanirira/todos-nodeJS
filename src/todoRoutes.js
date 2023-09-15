const { Router } = require("express");
const {getTodo, addTodo, deleteTodo} = require("./controllers");

const router = Router();

router.get('/',  getTodo)
router.post('/add', addTodo);
router.delete('/:id', deleteTodo)

module.exports = router