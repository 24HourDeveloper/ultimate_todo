const express = require('express')
const app = express()
const port = 3000
const todos = [
  {
    id:1,
    todo: 'clean up'
  },
  {
    id:2,
    todo: 'go buy groceries'
  },
  {
    id:3,
    todo: 'car oil change'
  },
  {
    id:4,
    todo: 'study for test'
  }
]

app.use(express.json())

app.get('/', (req, res) => res.send('Hello world!'))
app.get('/todos', (req, res) => {
  res.send(todos)
})
app.post('/todo', (req, res) => {

  todos.push(req.body)
  res.send(todos)
})
app.put('/todo/:id', (req, res) => {
  const selectedTodo = todos[req.params.id -1]
  selectedTodo.todo = req.body.todo
  res.send(selectedTodo) 
})
app.delete('/todo/:id', (req, res) => {
  const selectedTodo = todos.splice(req.params.id)
  res.send(selectedTodo) 
})

app.listen(port, () => console.log('server started'))