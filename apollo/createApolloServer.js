const http = require('http')
const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const { applyMiddleware } = require('graphql-middleware')

const createApolloServer = (middlewares, { app, schema }) => {
    const schemaWithPermissions = applyMiddleware(schema, ...middlewares)
    const httpServer = http.createServer(app);

    return new ApolloServer({
        schema: schemaWithPermissions,
        context: ({ req, res }) => ({
            req,
            res
        }),
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })
}


module.exports = { createApolloServer }