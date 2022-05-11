const { addBook, register, login } = require('./Mutations')
const { books, authors } = require('./Queries')

const resolvers = {
    Query: {
        books: books,
        authors: authors,
    },
    Mutation: {
        addBook: addBook,
        register: register,
        login: login
    }
}

module.exports = { resolvers }