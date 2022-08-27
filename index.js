const http = require("http");
const express = require("express");

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { connectDB } = require("./database");

//Initializations
const app = express();
connectDB();
const httpServer = http.createServer(app);

const startServer = async () => {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  server = new ApolloServer({
    schema,
    introspection: true, // <-- temporal config
    plugins: [
      ApolloServerPluginLandingPageDisabled(),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  //For Apollo V3
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
};

startServer();

httpServer.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`Server running on PORT ${process.env.PORT || 4000}`);
});
