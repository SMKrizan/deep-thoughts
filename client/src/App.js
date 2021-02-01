import React from 'react';
// will provide data to components
import { ApolloProvider } from '@apollo/react-hooks';
// gets the data provided by ApolloProvider when needed
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// constructor fn establishes connection to GraphQL server using Apollo; 'uniform resource identifier' with relative path-value uses 'proxy' property added to package.json to prefix all HTTP requests so that this front-end server setup will work in both development and production environments 
const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    // passing in client variable as prop to provide access to server's API data to everything contained in this wrapper
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
