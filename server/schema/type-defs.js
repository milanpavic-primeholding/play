const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie!]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]
        user(id: ID!): User
        movies: [Movie!]
        movie(name: String!): Movie
    }

    # There are stuff that you can do with input that you can't do with the type
    # It supports default values
    input CreateUserInput {
        name: String!
        username: String!
        age: Int = 18
        nationality: Nationality = SERBIA
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
    }

    type Subscription {
        users: [User!]
    }

    enum Nationality {
        SERBIA
        GERMANY
        CHILE
    }
`;

module.exports = { typeDefs };
