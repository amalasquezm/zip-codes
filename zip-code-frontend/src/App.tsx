import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import ZipCode from './zip-code/ZipCode/ZipCode';

const link = from([
  new HttpLink({ uri: 'http://localhost:5858/graphql'})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});


function App() {
  return (
    <ApolloProvider client={client}>
      <ZipCode></ZipCode>
    </ApolloProvider>
  );
}

export default App;
