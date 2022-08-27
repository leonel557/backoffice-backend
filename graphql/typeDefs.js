const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # ----- Types

  type User {
    id: ID
    username: String
  }

  type Question {
    id: ID
    description: String
    answers: [Answer]
  }

  type Answer {
    id: ID
    description: String
  }

  # ----- Inputs

  input UserInput {
    username: String
    password: String
  }

  type Query {
    getQuestions: [Question]
  }

  type Mutation {
    login(input: UserInput): String # <-- This string will be used as a token 
  }
`;

module.exports = typeDefs;
