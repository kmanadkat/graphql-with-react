import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache({
    dataIdFromObject: (obj) => obj.id
  }),
  credentials: 'include'
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
