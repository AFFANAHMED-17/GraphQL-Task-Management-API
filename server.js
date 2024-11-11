const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// In-memory data structure for tasks
let tasks = [];
let taskIdCounter = 1;

// GraphQL Schema
const schema = buildSchema(`
  type Task {
    id: ID!
    title: String!
    description: String
    status: String
  }

  type Query {
    tasks: [Task]
    task(id: ID!): Task
  }

  type Mutation {
    addTask(title: String!, description: String): Task
    updateTask(id: ID!, title: String, description: String, status: String): Task
    deleteTask(id: ID!): Task
  }
`);

// Resolvers for Queries and Mutations
const root = {
  tasks: () => tasks,
  task: ({ id }) => tasks.find(task => task.id == id),

  addTask: ({ title, description }) => {
    const newTask = {
      id: taskIdCounter++,
      title,
      description: description || '',
      status: 'Pending'
    };
    tasks.push(newTask);
    return newTask;
  },

  updateTask: ({ id, title, description, status }) => {
    const task = tasks.find(task => task.id == id);
    if (!task) return null;

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;
    return task;
  },

  deleteTask: ({ id }) => {
    const taskIndex = tasks.findIndex(task => task.id == id);
    if (taskIndex === -1) return null;
    const deletedTask = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    return deletedTask;
  }
};

// Initialize Express and GraphQL
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
