require("dotenv").config();
const { ApolloServer } = require('apollo-server')

const gql = require('graphql-tag')
const mongoose = require('mongoose')

const typeDefs = require('./type/typeDefs')
const resolvers = require('./resolvers/index')



const server = new ApolloServer({
    typeDefs,
    resolvers,
    // accés req body(post) dans notre context
    context: ({ req }) => ({ req })
})

mongoose.connect(process.env.DB_USER_PASS, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected')
        return server.listen(process.env.PORT || 5000)
    })
    .then(res => {
        console.log(`server running at ${res.url}`)
    })