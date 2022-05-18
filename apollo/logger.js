const logger = {
  // server starts!
  async serverWillStart() {
    console.log('Server starting up!');
  },

  // Fires whenever a GraphQL request is received from a client.
  async requestDidStart() {
    return {
      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      async parsingDidStart() {
        console.log('Parsing started!');
      },

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      async validationDidStart() {
        console.log('Validation started!');
      },

    }
  },

  // encounter an error
  async didEncounterErrors(requestContext) {
    console.log('Error occured')
    console.error(requestContext.errors)
  }
};

module.exports = { logger }