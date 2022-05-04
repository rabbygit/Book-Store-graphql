const { db } = require("../../../services")

const addBook = async (parent, args, context) => {
    const result = await db.books.create(args.input)
    return result
}

module.exports = { addBook }