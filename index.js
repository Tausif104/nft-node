const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

// const PORT = 5000

app.listen(process.env.PORT||5000, () => {
  console.log("app is runing")
})
