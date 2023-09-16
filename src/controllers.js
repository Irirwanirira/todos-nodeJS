const todos = require("./db");

const getTodo = (req, res) => {
    if(!todos.length){
        return res.status(500).json({message: 'no Tasks available'})
    }
    return res.status(200).json(todos);
}

const singleTodo = (req, res) => {
    let id = Number(req.params.id);

    const todoExists = todos.some((todo) => todo.id === id);

    if (!todoExists) {
        return res.status(404).json({ message: `Task ${id} not found` });
    }else{
        let todo= todos.filter(todo => todo.id === id)
        res.status(200).json({message: `Todo ${id}`, todo})
    }

}

const addTodo = (req, res)=> {
    let {task} = req.body
    if(!task){
        return res.status(404).json({message: 'validate your task to submit'})
    }
    let newTodo = {
        id:todos.length +1,
        task,
        completed:false
    }
    todos.push(newTodo)
    return res.status(201).json({message: "Task added successfully"})
}

const deleteTodo =(req, res) => {
    let id = Number(req.params.id);

    const todoExists = todos.some((todo) => todo.id === id);

    if (!todoExists) {
        return res.status(404).json({ message: `Task ${id} not found` });
    }else{
        todos = todos.filter((todo) => todo.id !== id);
     return res.status(200).json({message: `Todo ${id} was successfully deleted`})
    }
}

const editTodo =(req, res) => {
    let id = parseInt(req.params.id);
    let { task } = req.body;
    todos = todos.map((todo) => {
        if(todo.id === Number(id)) {
           todo.task = task;
        }
        return todo;
    })
    return res.status(200).json({message: 'Todo  is Successfully Edited'})
}

const completeTodo =(req, res) => {
    let id = Number(req.params.id);

    const todoExists = todos.some((todo) => todo.id === id);
    if (!todoExists) {
        return res.status(404).json({ message: `Task ${id} not found` });
    }else{
        todos.map((todo) => {
            if(todo.id === Number(id)) {
               todo.completed = !todo.completed ;
            }
            return todo;
        })
        return res.status(200).json({message: `Todo ${id} is completed`, todos})
    }
} 

module.exports =  { getTodo,addTodo, deleteTodo,editTodo, singleTodo, completeTodo, todos }