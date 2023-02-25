const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()


app.use('/graphql', graphqlHTTP({
  graphiql: true
}))


const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})