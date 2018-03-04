/* eslint-env browser */
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components and relative imports
import ChannelsList from './components/ChannelsList';
import Toolbar from './components/Toolbar';
import Grid from './components/Grid';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjeah8gn71lvx0171ta17gtbv',
  dataIdFromObject: obj => obj.id,
});

const App = () => (
  <ApolloProvider client={client}>
    <Toolbar>Apollo Tutorial</Toolbar>
    <Grid>
      <ChannelsList />
    </Grid>
  </ApolloProvider>
);

export default App;
