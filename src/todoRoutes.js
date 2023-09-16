const { Router } = require("express");
const {getTodo, addTodo, deleteTodo, editTodo, singleTodo,completeTodo} = require("./controllers");

const router = Router();

router.get('/listTodo',  getTodo)
router.get('/listTodo/:id', singleTodo)
router.post('/postTodo', addTodo);
router.delete('/deleteTodo/:id', deleteTodo);
router.patch('/edit_Todo/:id', editTodo)
router.get('/complete/:id', completeTodo)

module.exports = router