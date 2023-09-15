const request = require("supertest");
require('dotenv').config();
const app = require('../index');
const arr = []

describe("GET /", () => {
    it(" should return json data",async() => {
      const res = await request(app).get("/");
      expect(res.statusCode).toBe(200);
    });
});


describe("GET /api", () => {
    it("should return all the todos",async() => {
      const res = await request(app).get("/api");
      expect(res.statusCode).toBe(200);
    });
});
describe("POST /api/add", () => {
    it("should create a todo", async () => {
    
     const newTodo ={
        
            id: arr.length + 1,
            task: "coding",
            completed: true,
          
     }

     arr.push(newTodo)
      const res = await request(app).post("/api/add").send(newTodo);
        expect(res.statusCode).toBe(201);
    });
  });

describe("DELETE /api/:id", () => {
it("should delete a todo", async () => {
    const res = await request(app).delete(
    "/api/5"
    );
    expect(res.statusCode).toBe(200);
});
});

