const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.send("Auth GraphQL")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT.toString()}`
  )
})