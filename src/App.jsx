/* eslint-env browser */
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components and relative imports
import ChannelsList from './components/ChannelsList';
import Toolbar from './components/Toolbar';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjeah8gn71lvx0171ta17gtbv',
  dataIdFromObject: obj => obj.id,
});

const App = () => (
  <ApolloProvider client={client}>
    <Toolbar>Apollo Tutorial</Toolbar>

    <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <ChannelsList />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
