const authors = async (parent, args, context) => {
  return await context.prisma.user.findMany()
}

const author = async (parent, args, context, info) => {
  return await context.prisma.user.findUnique({
    where: {
      id: args.id || undefined
    }
  })
}

module.exports = {
  authors,
  author
}
