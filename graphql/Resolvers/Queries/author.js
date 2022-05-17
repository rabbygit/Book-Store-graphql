const PrismaSelect = require('@paljs/plugins').PrismaSelect

const authors = async (parent, args, context, info) => {
  const select = new PrismaSelect(info).value;
  return await context.prisma.user.findMany({
    ...select
  })
}

const author = async (parent, args, context, info) => {
  const select = new PrismaSelect(info).value;
  return await context.prisma.user.findUnique({
    where: {
      id: args.id || undefined
    },
    ...select
  })
}

module.exports = {
  authors,
  author
}
