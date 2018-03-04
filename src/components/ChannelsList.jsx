import React from 'react';
import { graphql } from 'react-apollo';

import ChannelsListQuery from '../queries/ChannelsListQuery';
import AddChannel from './AddChannel';
import Card from '../components/Card';
import List from '../components/List';
import ListItem from '../components/ListItem';


const Channels = channels => (
  channels.map(c => (
    <ListItem selected={c.id < 0}>{c.name}</ListItem>
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
      <Card>
        <List>
          {Channels(allChannels)}
        </List>
      </Card>
    </div>
  );
};

export default graphql(ChannelsListQuery, {
  options: { pollInterval: 5000 }, // Apollo refetch the list from the server
})(ChannelsList);
