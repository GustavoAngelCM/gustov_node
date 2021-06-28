import { resolvers } from './Resolver';
import { typeDefs } from './Schema';
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({typeDefs, resolvers});

( async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}) ();