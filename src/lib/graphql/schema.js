import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    ping: String!
  }

  type Hero {
    id: ID!
    name: String!
    imageName: String!
    bio: String!
    isVerified: Boolean!
    canStartWith: [String!]!
    startWith: String!
  }

  type Message {
    id: ID!
    text: String!
    createdAt: String!
  }

  type Query {
    Heroes: [Hero!]
    Hero(id: ID!): Hero
    Messages: [Message!]
  }
`;
