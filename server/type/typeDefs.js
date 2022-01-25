const gql = require('graphql-tag')


module.exports = gql`
type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
}

type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
}

type Like{
    id:ID!
    createdAt: String!
    username: String!
}
type User{
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    token: String!
    username: String!
    address: String!
    city: String!
    country: String!
    createdAt: String!
}
input RegisterInput{
    firstname: String!
    lastname: String!
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    address: String!
    city: String!
    country: String!
}
type Query {
   getPosts: [Post]
   getPost(postId: ID!): Post
}
type Mutation{
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post! 
}

`