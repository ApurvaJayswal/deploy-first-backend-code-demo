require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000 // so actually, this is not used because we are using process.env.PORT , so that a actually port is set in the .env file which i can not write here for the security reasons and also for the security reasons i am not using the .env file in this code snippet

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This Page is Focus on our own Website!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at TravelEn</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 