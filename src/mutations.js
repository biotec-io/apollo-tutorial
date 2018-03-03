import { gql } from 'apollo-boost';

const mutations = gql`
  mutation addChannel($name: String) {
    createChannel(name: $name) {
      id
      name
    }
  }
`;

export default mutations;
