const express = require("express")
const cors = require("cors")
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { typeDefs, resolvers } = require('./graphql')
const { permissions } = require('./guards')
const { createApolloServer } = require('./apollo/createApolloServer')
require('dotenv').config()

const startApolloServer = async () => {
    const app = express()
    app.use(cors())
    app.use(express.json())

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    const server = createApolloServer([permissions], { app, schema })
    await server.start()
    server.applyMiddleware({ app });

    app.listen(3000)
    console.log(`🚀 Apollo Server ready at http://localhost:3000${server.graphqlPath}`);
}

module.exports = { startApolloServer }