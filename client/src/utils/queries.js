// helps parse client-side tagged template-literal statements for queries and mutations
import gql from 'graphql-tag';

// query definition can be imported wherever needed within front-end app
export const QUERY_THOUGHTS = gql`
    query thoughts($username: String) {
        thoughts(username: $username) {
            _id
            thoughtText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

// query definition will be exported to provide data to 'single thought' page
export const QUERY_THOUGHT = gql`
    query thought($id: ID!) {
        thought(_id: $id) {
            _id
            thoughtText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
            thoughts {
                _id
                thoughtText
                createdAt
                reactionCount
            }
        }
    }
`;
// provides info for user's profile page; syntax here is different than other queries as there are no variables being passed, it simply retrieves all data related to the logged-in user
export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            friendCount
            thoughts {
                _id
                thoughtText
                createdAt
                reactionCount
                reactions {
                    _id
                    createdAt
                    reactionBody
                    username
                }
            }
            friends {
                _id
                username
            }
        }
    }
`;

// provides data for user's home page
export const QUERY_ME_BASIC = gql`
{
    me {
        _id
        username
        email
        friendCount
        friends {
            _id
            username
        }
    }
}
`;