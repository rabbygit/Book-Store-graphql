const { db } = require("../../../services")

const getBooks = async (parent, args, context) => {
    return await db.books.findAll()
}

module.exports = { getBooks }