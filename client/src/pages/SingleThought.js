import React from 'react';
// enables access to information from URL
import { useParams } from 'react-router-dom';
// enables access to query definition
import { useQuery } from '@apollo/react-hooks';
// imports query definitions
import { QUERY_THOUGHT } from '../utils/queries';
// imports 'ReactionList' component
import ReactionList from '../components/ReactionList';

const SingleThought = props => {
 
  const { id: thoughtId } = useParams();

  // 'loading' (shows whether data is loading) and 'data' (populates data result) are destructured from 'useQuery' hook
  const { loading, data } = useQuery(QUERY_THOUGHT, {
    // this 2nd argument-object passes needed variables to queries that require them
    variables: { id: thoughtId }
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  // 'thought.reactionCount/ passes in reactions array as a prop and prevents rendering reactions if array is empty
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>{' '}
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}
    </div>
  );
};

export default SingleThought;
