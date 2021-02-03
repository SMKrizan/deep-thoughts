import gql from 'graphql-tag';

// resembles GraphQL Playground mutation syntax - names and format have to match server setup
// takes variables, $email and $password, the values for which will be passed in as arguments upon integration with login form page; logged-in user's data and token will be returned.
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;
