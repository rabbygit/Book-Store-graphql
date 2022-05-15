const books = async (parent, args, context) => {
    return await context.prisma.book.findMany()
}

const booksForUser = async (parent, args, context) => {
    return await context.prisma.user.findUnique({
        where: { id: parent.id || undefined },
    })
        .books()
}

module.exports = {
    books,
    booksForUser
}