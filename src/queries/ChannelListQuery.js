import { gql } from 'apollo-boost';

export default gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;
