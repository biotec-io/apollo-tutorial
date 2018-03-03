import React from "react";
import { graphql } from "react-apollo";

import ChannelsListQuery from "../queries/ChannelsListQuery";
import AddChannel from "./AddChannel";

const Channels = (channels) => {
  return channels.map(c => {
    return (
      <li
        style={{ color: c.id < 0 ? "red" : "black" }}
        key={c.id}
      >
        {c.name}
      </li>
    );
  });
};

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
        {Channels(allChannels)}
      </ul>
    </div>
  );
};

export default graphql(ChannelsListQuery, {
  options: { pollInterval: 5000 } // Apollo refetch the list from the server
})(ChannelsList);
