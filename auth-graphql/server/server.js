const dotenv = require('dotenv')
const express = require('express')
const session = require('express-session')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const passport = require('passport')
const MongoStore = require('connect-mongo')

require('./models/index')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.send("Auth GraphQL")
})

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
  })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT.toString()}`
  )
})
