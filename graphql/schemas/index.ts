import { gql } from "graphql-tag";

export const typeDefs = gql`
  scalar Date

  type Task {
    _id: ID!
    taskName: String!
    priority: Int!
    isDone: Boolean
    createdAt: Date
    updatedAt: Date
  }

  input addTaskInput {
    taskName: String!
    priority: Int!
  }

  input updateTaskInput {
    taskId: ID!
    taskName: String!
    priority: Int!
    isDone: Boolean
  }

  type Query {
    helloQuery: String
    getAllTasks: [Task!]!
    getDoneTasks: [Task!]!
  }

  type Mutation {
    sayHello(name: String!): String
    addTask(input: addTaskInput!): Task
    updateTask(input: updateTaskInput!): Task
  }
`;
