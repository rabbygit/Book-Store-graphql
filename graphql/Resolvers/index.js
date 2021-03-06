const { addBook, register, login } = require('./Mutations')
const { books, authors, booksForUser } = require('./Queries')

const resolvers = {
    Query: {
        books: books,
        authors: authors,
    },
    Mutation: {
        addBook: addBook,
        register: register,
        login: login
    },
    Author: {
        books: booksForUser
    }
}

module.exports = { resolvers }