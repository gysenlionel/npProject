require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const typeDefs = require('./types/typeDefs')
const resolvers = require('./resolvers')


// connection mongoDB
mongoose.connect(process.env.DB_USER_PASS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
},
    () => console.log("DB CONNECTED")
)

// server connection
const startServer = async () => {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs, resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app: app })
    app.listen(process.env.PORT || 3001, () => console.log('Server UP & running 3001'))
}
startServer()