import React, { Component } from 'react';
import { graphql } from 'react-apollo';

/* Queries and mutations */
import query from '../queries/ChannelsListQuery';
import mutations from '../mutations';

class AddChannel extends Component {
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      e.persist();
      this.props.mutate({
        variables: { name: e.target.value },
        optimisticResponse: {
          __typename: 'Mutation',
          createChannel: {
            __typename: 'Channel',
            id: Math.round(Math.random() * -1000000),
            name: e.target.value
          }
        },
        update: (store, { data: { createChannel } }) => {
          // Read the data from the cache for this query
          const data = store.readQuery({ query });

          // Add our channel from the mutation to the end
          data.allChannels.push(createChannel);

          // Write the data back to the cache
          store.writeQuery({ query, data });
        }
      }).then(res => e.target.value = '');
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="New channel"
        onKeyUp={this.handleKeyUp.bind(this)}
      />
    )
  }
}

export default graphql(mutations)(AddChannel);
