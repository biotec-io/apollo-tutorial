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
        refetchQueries: [ { query }]
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
