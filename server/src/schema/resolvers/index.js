import AccountsServer from "@accounts/server";
import { authenticated } from "@accounts/graphql-api";

export const resolvers = {
  Query: {
    sensitiveInformation: authenticated(AccountsServer, () => ({
      secret: "Sensitive info",
    })),
  },
};
