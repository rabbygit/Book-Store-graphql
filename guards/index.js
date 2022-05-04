const { shield, allow, not } = require('graphql-shield')
const { isAuthorized } = require('./rules')

const permissions = shield({
    Query: {},
    Mutation: {
        addBook: isAuthorized,
    }
}, {
    debug: true,
    fallbackRule: allow,
})

module.exports = { permissions }