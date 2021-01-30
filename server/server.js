const express = require('express');
// imports Apollo server
const { ApolloServer } = require('apollo-server-express');

// imports our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// creates new Apollo server and passes in schema data so they know what our API looks like and how it resolves requests (there are more parameters that can be passed in, but the following two are required to get started
// when Apollo server is connected to Express.js server a /graphql endpoint will be created for Express.js server to serve as main endpoint for accessing the entire API
const server = new ApolloServer({
  typeDefs,
  resolvers
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
