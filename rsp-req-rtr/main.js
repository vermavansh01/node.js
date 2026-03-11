const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log("hello its a get req")
  res.send('Hello World get!')
})

app.post('/', (req, res) => {
  console.log("hello its a post req")
  res.send('Hello World post ')
})

app.delete('/', (req, res) => {
  console.log("hello its a delete req")
  res.send('Hello World delete')
})
app.get('/index', (req, res) => {
  console.log("hello its a delete req")
  res.sendFile('templates/index.html',{root: __dirname})
})
app.get('/json', (req, res) => {
  console.log("hello its a delete req")
  res.json({"a":1,"b":2,"c":3,"name":["vansh","harry"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
