const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/dhanur', (req, res) => {
  res.send('Hello Dhanur')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
