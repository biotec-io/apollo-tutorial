import React, { Component } from 'react';
import  ApolloClient  from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import logo from './logo.svg';
import './App.css';
import ChannelsList from './components/ChanelsList';

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
