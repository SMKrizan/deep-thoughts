// import GraphQL tagged template function; an advanced use of template literals introduced w ES6
const { gql } = require('apollo-server-express');

// create typeDefs variable; all typeDefs will go into the typeDefs tagged template fn; <type Query {}> is a data type built into GraphQL
// GraphQL uses 'scalars': built-in data types; here inside the variable is added a custom data type and then a definition
const typeDefs = gql`

type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
}    

type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
}

type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
}

type Auth {
    token: ID!
    user: User
}
    
`;
// export typeDefs
module.exports = typeDefs;
