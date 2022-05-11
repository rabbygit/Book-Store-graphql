const { db } = require("../../../services")

const authors = async (parent, args, context) => {
  return await db.users.findAll()
}

module.exports = { authors }
