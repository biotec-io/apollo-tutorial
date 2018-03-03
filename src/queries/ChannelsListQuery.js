import { gql } from 'apollo-boost';

const ChannelsListQuery = gql`
  query ChannelsListQuery {
    allChannels {
      id
      name
    }
  }
`;

export default ChannelsListQuery;
