const request = require('supertest');
require('dotenv').config();
const app = require('../src/index');
const todos = require('../src/db');


describe('GET /', () => {
  it(' should return json data', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /api/listTodo', () => {
  it('should return all the todo', async () => {
    const res = await request(app).get('/api/listTodo');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(todos);
    expect(res.body[0]).toHaveProperty("id",1);
    res.body.forEach(todo => {
      expect(typeof todo.completed).toEqual("boolean");
      expect(typeof todo.task).toEqual("string");
      expect(todo).toHaveProperty("task");
    });
  });
});

// describe('POST /api/postTodo', () => {
//   it('should create a new todo', async () => {
//     const newTodo = {
//       id: arr.length + 1,
//       task: 'coding',
//       completed: false,
//     };

//     todos.push(newTodo);
//     const res = await request(app).post('/api/postTodo').send(newTodo);
//     expect(res.statusCode).toBe(201);
//   });
// });

describe('DELETE /deleteTodo/:id', () => {
  it('should delete a todo', async () => {
    const res = await request(app).delete('/deleteTodo/4');
    expect(res.statusCode).toBe(200);
  });
});
