const User = require('../models/User.model')
const { ApolloError } = require('apollo-server-errors')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
module.exports = {
    Mutation: {
        async registerUser(_, { registerInput: { username, email, password } }) {
            // voir si il n'y a pas d'user de avec cet email
            const oldUser = await User.findOne({ email })

            // erreur si user exist
            if (oldUser) {
                throw new ApolloError('A user is already registered with the email' + email, 'USER_ALREADY_EXIST')
            }
            // crypt le password
            var encryptedPassword = await bcrypt.hash(password, 10)
            // construire model mongoose
            const newUser = new User({
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
            })
            // créer un jwt
            const token = jwt.sign(
                { user_id: newUser._id, email },
                "UNSAFE_STRING",
                {
                    expiresIn: '2h'
                }
            )
            newUser.token = token
            // sauvegarder dans mongoDB
            const res = await newUser.save()

            return {
                id: res.id,
                ...res._id
            }
        },
        async loginUser(_, { loginInput: { username, email, password } }) {
            // voir si user existe avec email
            const user = await User.findOne({ email })
            //  verif password = password db
            if (user && (await bcrypt.compare(password, user.password))) {
                // crée un new token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    "UNSAFE_STRING",
                    {
                        expiresIn: '2h'
                    }
                )
                // attaché le token a userSelect: 
                user.token = token

                return {
                    id: user.id,
                    ...user._doc
                }
                // si user n'existe pas return error
            } else {
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD')
            }
        }
    },
    Query: {
        message: (_, { ID }) => User.findByid(ID)
    }

}


