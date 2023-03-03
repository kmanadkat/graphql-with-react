import dotenv from 'dotenv'
const express = require('express')
import connectDB from './config/db'
const { graphqlHTTP } = require('express-graphql')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

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