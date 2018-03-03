import React, { Component } from 'react';
import  ApolloClient  from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components and relative imports
import logo from './logo.svg';
import './App.css';
import ChannelsList from './components/ChanelsList';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjeah8gn71lvx0171ta17gtbv'
});

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
