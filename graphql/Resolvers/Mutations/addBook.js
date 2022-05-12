const addBook = async (parent, args, context) => {
    const result = await context.prisma.book.create({
        data: args.input
    })
    return result
}

module.exports = { addBook }