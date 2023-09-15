const { Router } = require("express");
const {getTodo, addTodo, deleteTodo, editTodo} = require("./controllers");

const router = Router();

router.get('/',  getTodo)
router.post('/add', addTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id', editTodo)


module.exports = router