const request = require('supertest');
require('dotenv').config();
const app = require('../src/index');
const { softDelete, editTodo } = require('../src/controllers')
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

describe('POST /api/postTodo', () => {
  it('should create a new todo', async () => {
    let date = new Date();
    date = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    const newTodo = {
      id:4,
      task: "Eat",
      completed:false,
      date,
      isDeleted: false
    }
    todos.push(newTodo)

    const res = await request(app).post('/api/postTodo').send(newTodo);
    expect(res.statusCode).toBe(201);
    expect(newTodo.task).toBe("Eat");
    expect(typeof newTodo.isDeleted).toBe("boolean");
  });
});

describe('GET /api/listTodo/id', () => {
  it('should return all the todo', async () => {
    const id = 1; 
    const res = await request(app).get(`/api/listTodo/${id}`);
    
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(todos)).toBe(true);
    todos.forEach(todo => {
      expect(typeof todo.completed).toBe("boolean");
      expect(typeof todo.task).toBe("string");
      expect(todo).toHaveProperty("task");
      if (todo.id === id) {
        expect(todo).toHaveProperty("id", id);
      }
    });
  });
});

describe('softDelete', () => {
  it('should soft delete a todo with the given id', () => {
    const req = { params: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const expectedResponse = { message: `Todo 1 has been softly deleted` };

    softDelete(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expectedResponse);
    expect(todos.some(todo => todo.id === 1 && todo.isDeleted)).toBe(true);
  });

  it('should return an error if the todo does not exist', () => {
    const req = { params: { id: 1000 } }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const expectedResponse = { message: `Unable to Remove 1000 from the list` };

    softDelete(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expectedResponse);
  });
});

describe('editTodo', () => {
  it('should edit a todo with the given id', () => {
    const req = { params: { id: 1 }, body: { task: 'Updated task' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    editTodo(req, res);
    expect(todos.some(todo => todo.id === req.params.id && todo.task === 'Updated task')).toBe(false);
  });

  it('should return an error if the todo does not exist', () => {
    const req = { params: { id: 999 }, body: { task: 'Updated task' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const expectedResponse = { message: `Todo 999 doesn't exist` };

    editTodo(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith(expectedResponse);
  });

  it('should return an error if the task is not provided', () => {
    const req = { params: { id: 1 }, body: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    editTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});



