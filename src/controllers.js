// function Todo(id, task, completed){
//     this.id = id,
//     this.task = task,
//     this.completed = completed
// }
let todos = [ {id:1, task:'coding', completed: true}, {id:2, task: 'drinking', completed: false}]


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

module.exports =  { getTodo,addTodo }