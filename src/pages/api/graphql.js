import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../lib/graphql/schema";
import { resolvers } from "../../lib/graphql/resolver";
import Cors from "micro-cors";

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

const handler = cors(async (req, res) => {
  await startServer;

  if (req.method === "OPTIONS") {
    res.end();
    return false
  }

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
