const { gql } = require('apollo-server-express')

// queries
const typeDefs = gql`
type Post{
    id: ID
    title: String
    description: String
}

    type Query{
        hello: String
        getAll: [Post]
    }

    input PostInput{
        title:String
        description:String
    }

    type Mutation{
        createPost(post:PostInput):Post
    }
    `

module.exports = typeDefs