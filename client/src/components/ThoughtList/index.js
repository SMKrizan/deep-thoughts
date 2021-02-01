import React from 'react';

// conditionally renders thought data; data is destructured to avoid having to use 'props.thoughts' and 'props.title' throughout JSX code
const ThoughtList = ({ thoughts, title }) => {
    // first checking to see whether thoughts array contains data
    if (!thoughts.length) {
        return <h3>No Thoughts Yet</h3>;
    }

    return (
        <div>
            {/* instructs ThoughtList component to receive two props: 'title' and 'thoughts' array */}
            <h3>{title}</h3>
            {thoughts &&
            thoughts.map(thought => (
                // 'key' is required on mapped data to help React internally track data changes for re-rendering
                <div key={thought._id} className='card mb-3'>
                    <p className='card-header'>
                        {thought.username}
                        thought on {thought.createdAt}
                    </p>
                    <div className='card-body'>
                        <p>{thought.thoughtText}</p>
                        <p className='mb-0'>
                            Reactions: {thought.reactionCount} || Click to{' '}
                            {thought.reactionCount ? 'see' : 'start'} the discussion!
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ThoughtList;