## Auth GraphQL Backend

Simple backend for storing users, powered by express, graphQL & mongoDB.

### Project Setup

1. Clone project
2. Add `.env` file having 5 global variables

```text
NODE_ENV=development
MONGO_URI=<URI From MongoDB Atlas>
PORT=8000
SALT_ROUNDS=10
SESSION_SECRET=<Random String>
```

3. Run `npm run dev` in directory `server.js` is present.
