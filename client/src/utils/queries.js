// helps parse client-side tagged template-literal statements for queries and mutations
import gql from 'graphql-tag';

// can be imported wherever needed within front-end app
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