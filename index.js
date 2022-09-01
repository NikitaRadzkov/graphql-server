const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const PORT = process.env.PORT || 5500

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))