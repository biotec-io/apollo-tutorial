import React from 'react';
import { graphql } from 'react-apollo';

import ChannelsListQuery from '../queries/ChannelsListQuery';
import AddChannel from './AddChannel';

const ChannelsList = ({ data: { loading, error, allChannels } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
      <AddChannel />
      <ul>
        {
          allChannels.map(channel => <li key={channel.id}>{channel.name}</li>)
        }
      </ul>
    </div>
  );
};

export default graphql(ChannelsListQuery, {
  options: { pollInterval: 5000 } // Apollo refetch the list from the server
})(ChannelsList);
