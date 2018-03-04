/* eslint-env browser */
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Styles
import './App.scss';

// Components and relative imports
import ChannelsList from './components/ChannelsList';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjeah8gn71lvx0171ta17gtbv',
  dataIdFromObject: obj => obj.id,
});

const App = () => (
  <ApolloProvider client={client}>
    <header className="mdc-toolbar">
      <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <span className="mdc-toolbar__title">Apollo Tutorial</span>
        </section>
      </div>
    </header>

    <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <ChannelsList />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
