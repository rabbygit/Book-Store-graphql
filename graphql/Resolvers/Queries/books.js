const { db } = require("../../../services")

const books = async (parent, args, context) => {
    return await db.books.findAll()
}

module.exports = { books }