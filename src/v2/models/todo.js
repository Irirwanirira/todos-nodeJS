const Sequelize = require('sequelize');

module.exports = (sequelize)=> {
    const Todo = sequelize.define('todo', {
       title: {
        type: Sequelize.STRING
       },
       description: {
        type: Sequelize.TEXT
       },
       status: {
        type: Sequelize.STRING
       }
    })

    return Todo
}