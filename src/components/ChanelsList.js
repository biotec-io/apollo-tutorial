import React from 'react';
import { graphql } from 'react-apollo';

import ChannelsListQuery from '../queries/ChannelListQuery';

const ChannelsList = ({ data: { loading, error, channels }}) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
      <ul>
      {channels.map(ch => <li key={ch.id}>{ch.name}</li>)}
    </ul>
  );
};

export default graphql(ChannelsListQuery)(ChannelsList);
