import React from 'react';
import { Link } from 'react-router-dom';

// passing in 3 props: array of 'friends' belonging to user, 'username' of user, and # of friends
const FriendList = ({ friends, username, friendCount }) => {
    if (!friends || !friends.length) {
        return <p className='bg-dark text-light p-3'>{username}, make some friends!</p>;
    }

    return (
        <div>
            <h5>
                {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
            </h5>
            {friends.map(friend => (
                <button className='btn w-100 display-block mb-2' key={friend._id}>
                    <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
                </button>
            ))}
        </div>
    )
}

export default FriendList;