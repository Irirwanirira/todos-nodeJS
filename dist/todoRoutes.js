const {
  Router
} = require("express");
const {
  getTodo,
  addTodo,
  deleteTodo,
  editTodo,
  singleTodo,
  completeTodo,
  softDelete
} = require("./controllers");
const router = Router();
router.get('/listTodo', getTodo);
router.get('/listTodo/:id', singleTodo);
router.post('/postTodo', addTodo);
// router.delete('/deleteTodo/:id', deleteTodo);
router.delete('/deleteTodo/:id', softDelete);
router.patch('/edit_Todo/:id', editTodo);
router.get('/completeTodo/:id', completeTodo);
module.exports = router;