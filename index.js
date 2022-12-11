const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.mode} mode on port ${PORT}`)
})
