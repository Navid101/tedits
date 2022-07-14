import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api-ap-south-1.hygraph.com/v2/cl5ktdhu33auw01tagztbdwew/master',
    cache: new InMemoryCache(),
});

export default client;