const http = require('http')
const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const { applyMiddleware } = require('graphql-middleware')
const { PrismaClient } = require("@prisma/client")
const responseCachePlugin = require('apollo-server-plugin-response-cache');
const { logger } = require('./logger')


const createApolloServer = (middlewares, { app, schema }) => {
    const schemaWithPermissions = applyMiddleware(schema, ...middlewares)
    const httpServer = http.createServer(app);
    const prisma = new PrismaClient({ log: ['query', 'info'] })

    return new ApolloServer({
        schema: schemaWithPermissions,
        context: ({ req, res }) => ({
            req,
            res,
            prisma
        }),
        csrfPrevention: true,
        persistedQueries: {
            ttl: 600, // in seconds
        },
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }), // drain graphql when http server is close
            responseCachePlugin.default(), // enable full response caching
            logger, // logger
        ],
        async onHealthCheck() {
            if (everythingLooksHealthy()) {
                return;
            } else {
                throw new Error('Errpr thrwon from heath check');
            }
        },
    })
}


module.exports = { createApolloServer }