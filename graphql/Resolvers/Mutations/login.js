const { db } = require("../../../services");
const { signToken, verifyPassword } = require("../../../utils");

const login = async (parent, args, context) => {
    const { password, username } = args.input;

    const result = await db.users.findOne({
        where: {
            username
        }
    })

    if (!result) throw new Error("Invalid credential");

    const isValidPassword = await verifyPassword(result.password, password);

    if (!isValidPassword) throw new Error("Invalid credential");

    return {
        id: result.id,
        username: result.username,
        token: signToken({ userId: result.id }),
    };
};

module.exports = { login }