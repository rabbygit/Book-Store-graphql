const { db } = require("../../../services")
const { hashPassword, signToken } = require("../../../utils")

const register = async (parent, args, context) => {
    const { password, username } = args.input

    const hashed = await hashPassword(password)

    const result = await db.users.create({ username, password: hashed })

    return {
        id: result.id,
        username: result.username,
        password: result.password,
        token: signToken({ userId: result.id }),
    }
}

module.exports = { register }