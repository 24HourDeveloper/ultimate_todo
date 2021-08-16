const express = require('express')
const {Todo} = require('./models')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello world!'))
app.get('/todos', async (req, res) => {
  const todos = await Todo.findAll()
  res.send(todos)
})
app.post('/todo', async (req, res) => {
  const todo = await Todo.create(req.body)
  res.send(todo)
})
app.put('/todo/:id', async (req, res) => {
  const todoUpdated = await Todo.update({ todo: req.body.todo}, {where: { id: req.params.id }})
  res.send(todoUpdated) 
})
app.delete('/todo/:id', async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id }})
  res.sendStatus(200) 
})

app.listen(port, () => console.log('server started'))