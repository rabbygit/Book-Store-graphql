const Mutations = require('./Mutations')
const Queries = require('./Queries')

const resolvers = {
    Query: {
        ...Queries
    },
    Mutation: {
        ...Mutations
    }
}

module.exports = { resolvers }