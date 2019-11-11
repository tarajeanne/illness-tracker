
require("dotenv").config();
const serverless = require('serverless-http');

const app = require('./app');
const {PORT, user, host, database, password, db_port} = require('./config');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host,
    port: db_port,
    user,
    password,
    database
  }
})

app.set('db', db);

// app.listen(PORT,()=>{
// console.log(`Server is listening on port ${PORT}`);
// });

module.exports = serverless(app);

