// npm i express

// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World2');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


// app.get or app.post or app.put or app.delete

app.get('/', (req, res) => {
  res.send('Hello World!?')
})

app.get('/about', (req, res) => {
  res.send('about us')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog')
})

app.get('/blog/:slug/:second', (req, res) => {
    //logic to fetch {slug} from the db
    console.log(req.params)
    console.log(req.query)
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})
// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from the db
//   res.send('Hello WELCOME intro-to-js')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   //logic to fetch intro to python from the db
//   res.send('Hello WELCOME intro-to-python')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
