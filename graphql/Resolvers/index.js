const { addBook, register, login } = require('./Mutations')
const { books, authors, booksForUser, author } = require('./Queries')

const resolvers = {
    Query: {
        books: books,
        authors: authors,
        author: author,
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