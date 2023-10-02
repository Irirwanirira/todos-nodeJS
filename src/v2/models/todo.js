const Sequelize = require('sequelize');

module.exports = (sequelize)=> {
    const Todo = sequelize.define('todo', {
       title: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       description: {
        type: Sequelize.TEXT,
        allowNull: false,
       },
       status: {
        type: Sequelize.STRING,
        default: "pending"
       }
    })

    return Todo
}