# GraphQL Task Management API

This project is a simple **Task Management API** built using **Node.js**, **Express.js**, and **GraphQL**. It demonstrates how to perform CRUD (Create, Read, Update, Delete) operations on tasks, using an in-memory data storage solution. The project is designed to help developers understand the basics of GraphQL integration with Node.js.

## Key Features
- **Add Tasks**: Create new tasks with a title, description, and default status.
- **View Tasks**: Retrieve all tasks or fetch a specific task by its unique ID.
- **Update Tasks**: Modify task details, such as title, description, and status.
- **Delete Tasks**: Remove tasks by their unique ID.
- **GraphiQL Interface**: Provides a user-friendly interface for testing queries and mutations at `http://localhost:4000/graphql`.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building the API.
- **GraphQL**: API query language for flexible and efficient data retrieval.

## How to Run
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd graphql-task-manager
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   node server.js
   ```

4. **Access GraphiQL**:
   Open your browser and navigate to `http://localhost:4000/graphql` to test the API.

## Example Queries and Mutations
Here are some example queries and mutations you can run in GraphiQL:

### Query: Fetch All Tasks
```graphql
query {
  tasks {
    id
    title
    description
    status
  }
}
```

### Mutation: Add a New Task
```graphql
mutation {
  addTask(title: "New Task", description: "This is a new task") {
    id
    title
    description
    status
  }
}
```

### Mutation: Update a Task
```graphql
mutation {
  updateTask(id: 1, title: "Updated Task", status: "Completed") {
    id
    title
    description
    status
  }
}
```

### Mutation: Delete a Task
```graphql
mutation {
  deleteTask(id: 1) {
    id
    title
  }
}
```
