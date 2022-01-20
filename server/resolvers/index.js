const messagesResolvers = require('./Messages.resolvers')
const usersResolvers = require('./Users.resolvers')

module.exports = {
    Query: {
        ...messagesResolvers.Query,
        ...usersResolvers.Query
    },
    Mutation: {
        ...messagesResolvers.Mutation,
        ...usersResolvers.Mutation
    },
}