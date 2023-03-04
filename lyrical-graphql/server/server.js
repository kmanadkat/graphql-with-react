const dotenv = require('dotenv')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

require('./models/index')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  return res.send("Lyrical")
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT.toString()}`
  )
})