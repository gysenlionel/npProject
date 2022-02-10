require("dotenv").config();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')

const { validateRegisterInput, validateLoginInput } = require('../util/validators')
const User = require('../models/User')

// génere un token
function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
        city: user.city,
        country: user.country
    }, process.env.SECRET_KEY, { expiresIn: '2h' })

}
module.exports = {
    Mutation: {
        async login(_, { email, password }) {

            const { errors, valid } = validateLoginInput(email, password)

            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            const user = await User.findOne({ email })
            if (!user) {
                errors.general = 'User not found'
                throw new UserInputError('Wrong credentials', { errors })
            }

            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                errors.general = 'Wrong password'
                throw new UserInputError('Wrong credentials', { errors })
            }

            const token = generateToken(user)


            return {
                ...user._doc,
                id: user._id,
                token
            }
        },

        async register(_, { registerInput: { firstname, lastname, username, email, password, confirmPassword, address, city, country } },
            args, context, info) {
            // validé data
            const { valid, errors } = validateRegisterInput(firstname, lastname, username, email, password, confirmPassword, address, city, country)
            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }
            // verif si user bien unique
            const user = await User.findOne({ username, email })
            if (user) {
                throw new UserInputError('Username is taken'), {
                    errors: {
                        username: 'This username is taken'
                    }
                }
            }
            const userEmail = await User.findOne({ email })
            if (userEmail) {
                throw new UserInputError('Email is taken'), {
                    errors: {
                        email: 'This email is taken'
                    }
                }
            }
            // hash password
            password = await bcrypt.hash(password, 12)

            // crée un new user
            const newUser = new User({
                firstname,
                lastname,
                email,
                username,
                password,
                address,
                city,
                country,
                createdAt: new Date().toISOString()
            })
            const res = await newUser.save()
            // créer un token
            const token = generateToken(res)

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}