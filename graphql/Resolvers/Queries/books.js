const books = async (parent, args, context) => {
    return await context.prisma.book.findMany()
}

module.exports = { books }