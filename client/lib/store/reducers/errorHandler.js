import { GraphQLErrorList } from "@accounts/graphql-client";

export async function errorHandler(callbackAsync) {
  try {
    callbackAsync();
  } catch (e) {
    if (e instanceof GraphQLErrorList) {
      // the message will format the errors in a list
      console.log(error.message);
      // Alternatively, the list of errors is accessible on the "errors" property
      error.errors.forEach((graphQLError) => console.log(graphQLError));
    }
  }
}
