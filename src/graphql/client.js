import { ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://ipo.hasura.app/v1beta1/relay",
    headers: {
      "x-hasura-admin-secret":
        "B1QfGFKRuqI8iRru8t1lwKrMRSv2x31AXDo5QGz2eqnjE54nFH7t4PaCHnZmtcNB",
    },
  }),
  cache: new InMemoryCache().restore({}),
});

export default client;
