# todos-nodeJS

This project has 2 versions of api:

version 1:
with this version the todos are stored in an empty array, to run the server on your end you can use 
`node src/v1/index.js`
endpoint: http://localhost:PORT/api/v1/todo

version 2:
with this version Our todos are stored in a Postgres database, and we're using Sequelize to handle the database operations. To run the server on your end, you can use
`node src/v2/index.js`;
endpoint: http://localhost:PORT/api/v2/todo
