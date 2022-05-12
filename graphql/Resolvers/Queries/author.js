const authors = async (parent, args, context) => {
  return await context.prisma.user.findMany()
}

module.exports = { authors }
