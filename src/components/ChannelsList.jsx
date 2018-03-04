import React from 'react';
import { graphql } from 'react-apollo';

import ChannelsListQuery from '../queries/ChannelsListQuery';
import AddChannel from './AddChannel';

const Channels = channels => (
  channels.map(c => (
    <li
      className={(c.id < 0) ? 'mdc-list-item mdc-list-item--selected' : 'mdc-list-item'}
      key={c.id}
    >
      {c.name}
    </li>
  ))
);

const ChannelsList = ({ data: { loading, error, allChannels } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="mdc-layout-grid__cell">
      <AddChannel />
      <div className="mdc-card">
        <ul className="mdc-list">
          {Channels(allChannels)}
        </ul>
      </div>
    </div>
  );
};

export default graphql(ChannelsListQuery, {
  options: { pollInterval: 5000 }, // Apollo refetch the list from the server
})(ChannelsList);
