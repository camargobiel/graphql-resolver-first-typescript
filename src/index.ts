import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import express from 'express'
import 'dotenv/config'

const app = express()

const startServer = async (): Promise<void> => {
  const server = new ApolloServer({
    schema
  })
  await server.start()
  server.applyMiddleware({ app })

  const port = process.env.PORT ?? 4000
  app.listen(port, () => {
    console.log(`🚀  Server ready at: http://localhost:${port}/graphql`)
  })
}

void startServer()

export default app
