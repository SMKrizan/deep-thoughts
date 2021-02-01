const express = require('express');

// imports Apollo server
const { ApolloServer } = require('apollo-server-express');

// imports our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection');

// imports middleware that ensures every request performs an authentication check, with updated request object passed to resolvers as the context
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

// creates new Apollo server and passes in schema data so they know what our API looks like and how it resolves requests (there are more parameters that can be passed in, but the following two are required to get started
// when Apollo server is connected to Express.js server a /graphql endpoint will be created for Express.js server to serve as main endpoint for accessing the entire API
// 'context' method is set to return what will be made available in the resolvers; on the resolvers side, these headers become the 'context' parameter
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// integrate our Apollo server with the Express applications as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}$server.graphqlPath}`);
  });
});
