import React from 'react';
// enables routing between pages
import { Link } from 'react-router-dom';

// 'reactions' array is passed in as a prop and then mapped to a list of <p> elements; each reaction includes author's name, which will route to Profile page when clicked
const ReactionList = ({ reactions }) => {
    return (
        <div className='card mb-3'>
            <div className='card-header'>
                <span className='text-light'>Reactions</span>
            </div>
            <div className='card-body'>
                {reactions &&
                reactions.map(reaction => (
                    <p className='pill mb-3' key={reaction._id}>
                        {reaction.reactionBody} {'// '}
                        <Link to={`/profile/${reaction.username}`} style={{ fontWeight: 700 }}>
                            {reaction.username} on {reaction.createdAt}
                        </Link>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ReactionList;