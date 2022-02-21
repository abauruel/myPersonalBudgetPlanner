import express from 'express'
import http from 'http'
import { ApolloServer, gql } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { typeDefs } from './schema'
import { CategoryResolver } from '@modules/expenditure/useCases/Category/CategoryResolver'
import { SubCategoryResolver } from '@modules/expenditure/useCases/SubCategory/SubCategoryResolver'
import { buildSchema } from 'type-graphql'

const GraphQlServer = async () => {
  const app = express()
  const httpServer = http.createServer(app)

  const schema = await buildSchema({
    resolvers: [CategoryResolver, SubCategoryResolver],
  })

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()
  server.applyMiddleware({ app })

  await new Promise(resolve => httpServer.listen({ port: 4000 }))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

export { GraphQlServer }