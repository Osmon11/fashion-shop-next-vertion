import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-toolkit/schema-merging";
import mongoose from "mongoose";
import { Mongo } from "@accounts/mongo";
import { AccountsServer } from "@accounts/server";
import { AccountsPassword } from "@accounts/password";
import { AccountsModule } from "@accounts/graphql-api";

const startServer = async () => {
  // We connect mongoose to our local mongodb database
  mongoose.connect(
    "mongodb+srv://admin:admin66@cluster0.8axex.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  mongoose.connection
    .on("error", console.error.bind(console, "connection error:"))
    .once("open", function () {
      console.log("we're connected!");
    });

  const accountsMongo = new Mongo(mongoose.connection);

  const accountsPassword = new AccountsPassword({});

  const accountsServer = new AccountsServer(
    {
      db: accountsMongo,
      // Replace this value with a strong secret
      tokenSecret: "my-super-random-secret",
    },
    {
      password: accountsPassword,
    }
  );

  // We generate the accounts-js GraphQL module
  const accountsGraphQL = AccountsModule.forRoot({ accountsServer });

  // A new schema is created combining our schema and the accounts-js schema
  const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([typeDefs, accountsGraphQL.typeDefs]),
    resolvers: mergeResolvers([accountsGraphQL.resolvers, resolvers]),
    schemaDirectives: {
      ...accountsGraphQL.schemaDirectives,
    },
  });

  const server = new ApolloServer({ schema, context: accountsGraphQL.context });
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer();
