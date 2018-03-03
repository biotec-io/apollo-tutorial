import React from 'react';
import { graphql } from 'react-apollo';

import ChannelsListQuery from '../queries/ChannelsListQuery';

const ChannelsList = ({ data: { loading, error, allChannels } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul>
      {
        allChannels.map(channel => <li key={channel.id}>{channel.name}</li>)
      }
    </ul>
  );
};

export default graphql(ChannelsListQuery)(ChannelsList);
