// this page wil execute query to display all thought-data upon loading
import React from 'react';
// enables requests to GraphQL server connected to via ApolloProvider components within App.js
import { useQuery } from '@apollo/react-hooks';
// enables front-end query for thoughts
import { QUERY_THOUGHTS } from '../utils/queries';
// handles query and return of thoughts
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // uses useQuery hook to make query request; 'data' stores data returned from server and 'loading' can be used to conditionally render data based on whether or not there is data to display
  const { loading, data } = useQuery(QUERY_THOUGHTS)
  // uses 'optional chaining' to simultaneously check if object exists and access its properties, if so
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  // use of ternary operator conditionally renders ThoughtList component
  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title='Some Feed for Thought(s)...' />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
