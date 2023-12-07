import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const createApolloClient = () => new ApolloClient({
    uri: 'http://localhost:4000/api/graphql',
    cache : new InMemoryCache()
})

export default createApolloClient