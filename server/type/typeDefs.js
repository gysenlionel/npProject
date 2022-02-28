const gql = require('graphql-tag')


module.exports = gql`

type Event {
    id: ID!,
    concertId: String!,
    name:String!,
    qtyMin: Int,
    qtyMax:Int,
    priceMin: Float,
    priceMax: Float,
    date: String,
    address: String!
}

type Transaction {
    id: ID!,
    idUser: String!,
    price: Float!,
    events: [Event]!, 
    createdAt: String!, 
}

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

input TransactionInput {
    idUser: String!,
    price: Float!,
    events: [EventInput], 
}

input EventInput {
    transactionId: String!,
    concertId: String!,
    name:String!,
    qtyMin: Int,
    qtyMax: Int,
    priceMin: Float,
    priceMax: Float,
    date: String,
    address: String!
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
   getTransaction(transactionUserId: ID!): [Transaction]
   getTransactions: [Transaction]
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
    createTransaction(TransactionInput:TransactionInput) : Transaction
    createEvent(EventInput:EventInput) : Transaction
    
}

`