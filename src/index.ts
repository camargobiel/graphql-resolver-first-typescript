import { ApolloServer } from 'apollo-server-express'
import schema from './schema';
import express from 'express'
import 'dotenv/config'

const app = express()

const startServer = async () => {
  const server = new ApolloServer({
    schema
  });

  await server.start()

  server.applyMiddleware({ app })

  app.listen(process.env.PORT, () => {
    console.log(`🚀  Server ready at: http://localhost:${process.env.PORT}/graphql`)
  })
}

startServer();

export default app