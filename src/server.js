require('dotenv').config()

const knex = require('knex')
const app = require('./app')
const { PORT, DB_HOST, DB_USER, DB_PASS, DB_NAME } = require('./config')

const db = knex({
  client: 'pg',
  connection: {
    host : DB_HOST,
    user : DB_USER,
    password : DB_PASS,
    database : DB_NAME
  }
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})