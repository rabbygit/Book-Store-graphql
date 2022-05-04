const { startApolloServer } = require('./server')

const boostrap = async () => {
    try {
        await startApolloServer();
    } catch (error) {
        console.log(error)
        console.log("[Apollo Server]: Process exiting ...");
        console.log(`[Apollo Server]: ${error}`);
        process.exit(1);
    }
};

boostrap();