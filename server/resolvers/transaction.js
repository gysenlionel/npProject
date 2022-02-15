const Transaction = require('../models/Transaction')
const checkAuth = require('../util/checkauth')
const { AuthenticationError, UserInputError } = require('apollo-server')

module.exports = {

    Query: {

        async getTransactions() {
            try {
                const transactions = await Transaction.find()
                return transactions
            } catch (error) {
                throw new Error(err)
            }
        },

        async getTransaction(_, { transactionUserId }) {

            try {

                const transaction = await Transaction.find({ idUser: transactionUserId })
                if (transaction) {
                    return transaction
                } else {
                    throw new Error('Transactions not found')
                }
            } catch (error) {
                throw new Error(error)
            }

        }
    },

    Mutation: {
        async createTransaction(_, { TransactionInput: { idUser, price } }) {

            // const user = checkAuth(context)

            const newTransaction = new Transaction({
                price,
                idUser,
                createdAt: new Date().toISOString()
            })

            const transaction = await newTransaction.save()

            return transaction
        },
        async createEvent(_, { EventInput: {
            transactionId, concertId, name, qtyMin, qtyMax, priceMin, priceMax, date, address
        } }) {
            // trouve la transaction via id
            const transaction = await Transaction.findById(transactionId)

            // check si transaction existe
            if (transaction) {
                transaction.events.unshift({
                    concertId,
                    name,
                    qtyMin,
                    qtyMax,
                    priceMin,
                    priceMax,
                    date,
                    address
                })
                await transaction.save()
                return transaction
            } else throw new Error('transaction does not exist')
        }
    }
}