// this page wil execute query to display all thought-data upon loading
import React from 'react';
// enables requests to GraphQL server connected to via ApolloProvider components within App.js
import { useQuery } from '@apollo/react-hooks';
// enables front-end query for thoughts
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
// handles query and return of thoughts
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import Auth from '../utils/auth';
import FriendList from '../components/FriendList'

const Home = () => {
  // uses useQuery hook to make query request; 'data' stores data returned from server and 'loading' can be used to conditionally render data based on whether or not there is data to display
  const { loading, data } = useQuery(QUERY_THOUGHTS)
  // uses object destructuring to extract 'data' from the 'useQuery' hook response and renames it as 'userData' 
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  // uses 'optional chaining' to simultaneously check if object exists and access its properties, if so
  const thoughts = data?.thoughts || [];
  console.log(thoughts);
  // returns 'true' or 'false'
  const loggedIn = Auth.loggedIn();

  // use of ternary operator conditionally renders ThoughtList component
  return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className='col-12 mb-3'>
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
              <ThoughtList thoughts={thoughts} title='Some Feed for Thought(s)...' />
            )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
