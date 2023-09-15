let todos = [];

const getTodo = (req, res) => {
    if(!todos){
        return res.status(400).json({error: 'no todos available'})
    }
    return res.status(200).json(todos);
}

const addTodo = (req, res)=> {
    let {task, completed} = req.body
    let newTodo = {
        id:todos.length +1,
        task,
        completed
    }
    todos.push(newTodo)
    return res.status(201).json(todos)
}

const deleteTodo =(req, res) => {
    let id = parseInt(req.params.id);
    console.log(id);
    const newTodos = todos.filter((todo) => {
        if(todo.id !== id) {
            return todo
        }
    })
    return res.status(200).json(newTodos)
}

const editTodo =(req, res) => {
    let id = parseInt(req.params.id);
    const { task } = req.body;

    todos = todos.map((todo) => {
        if(todo.id === Number(id)) {
           todo.task = task;
        }
        return todo;
    })
    return res.status(200).json({message: 'Todo updated'})
}

module.exports =  { getTodo,addTodo, deleteTodo,editTodo }