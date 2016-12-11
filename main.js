import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('5555')
})

app.listen(3000)
