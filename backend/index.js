const express = require('express')
const app = express() 
const port = 3000

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World')
  })
app.get('/page', (req, res) => {
  res.send('1st page')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



let quote = [
    { id: 1, text: "TEXT1" },
    { id: 2, text: "TEXT2" },
]

app.get('/quotes', (req, res) => {
    res.json(quote)
});
