
const Post = require('../models/Post.model')

// resolvers
const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World'
        },
        getAll: async () => {
            return await Post.find()
        },
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, description } = args.post
            const post = await new Post({ title, description }).save()
            return post
        },
    },
}
module.exports = resolvers