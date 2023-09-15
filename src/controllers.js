// function Todo(id, task, completed){
//     this.id = id,
//     this.task = task,
//     this.completed = completed
// }
let todos = [ ]


const getTodo = (req, res) => {
    if(!todos){
        return res.status(400).json({error: 'no todos available'})
    }
    let todoList = todos.map(({id, task, completed}) => {
        return({id, task, completed})
    })
    return res.status(200).json(todoList)
}

const addTodo = (req, res)=> {
    let newTodo = req.body
    todos.push(newTodo)
    let todoList = todos.map(({id, task, completed}) => {
        return({id, task, completed})
    })
    return res.status(200).json(todoList)
}

const deleteTodo =(req, res) => {
    let id = parseInt(req.params.id);
    console.log(id);
    const newTodos = todos.filter((todo) => {
        if(todo.id !== id) {
            return todo
        }
    })
    return res.status(202).json(newTodos)
}

module.exports =  { getTodo,addTodo, deleteTodo }