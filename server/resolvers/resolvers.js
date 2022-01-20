
const Post = require('../models/Post.model')

// resolvers
const resolvers = {
    Query: {
        getAll: async () => {
            return await Post.find()
        },
        post: (_, { ID }) => {
            Post.findById(ID)
        },
    },
    Mutation: {
        async createPost(_, { postInput: {
            title, description, username
        } }) {
            const newPost = new Post({
                title: title,
                description: description,
                createdBy: username,
                createdAt: new Date().toISOString()
            })
            const res = await newPost.save()
            console.log(res)
            return {
                id: res.id,
                ...res._doc
            }
        }
    },
}
module.exports = resolvers

