import React from 'react';
// will provide data to components
import { ApolloProvider } from '@apollo/react-hooks';
// gets the data provided by ApolloProvider when needed
import ApolloClient from 'apollo-boost';
// 'BrowserRouter' (renamed as 'Router'), 'Route' and 'Switch' are components provided by the React Router Library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// importing all page components
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SingleThought from './pages/SingleThought';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// constructor fn establishes connection to GraphQL server using Apollo; 'uniform resource identifier' with relative path-value uses 'proxy' property added to package.json to prefix all HTTP requests so that this front-end server setup will work in both development and production environments
const client = new ApolloClient({
  // retrieves token from localStorage before each request
  request: operation => {
    const token = localStorage.getItem('id_token');
    // uses 'setContext()' method to set HTTP request headers of every request to include token, whether needed or not: if request does not require token, server-side resolver fn will not check for it
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    // passing in client variable as prop to provide access to server's API data to everything contained in this wrapper
    // 'Router' component instills awareness in child components on page aware of client-side routing; this code block is where content will change according to URL route
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
