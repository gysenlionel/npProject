const { AuthenticationError } = require('apollo-server')

const jwt = require('jsonwebtoken')
require("dotenv").config();

module.exports = (context) => {
    const authHeader = context.req.headers.authorization
    if (authHeader) {
        // viré le Bearer
        const token = authHeader.split('Bearer ')[1]
        if (token) {
            try {
                // check le token du header avec secret_key
                const user = jwt.verify(token, process.env.SECRET_KEY)
                return user
            } catch (err) {
                throw new AuthenticationError('Invalid/Expired token')
            }
        }
        // si token pas bon format
        throw new Error('Authentication token must be \'Bearer [token]\' ')
    }
    throw new Error('Authorization header must be provided')
}