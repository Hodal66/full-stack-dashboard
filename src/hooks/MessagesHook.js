/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, gql } from "@apollo/client";

const MESSAGES_QUERY_CONTAINER = gql`
  query GetMessages {
    getMessages {
      title
      id
      createdAt
      author
    }
  }
`;

export const getAllMessagesHook = () => {
  const { loading, data, error } = useQuery(MESSAGES_QUERY_CONTAINER);
  return {
    loading,
    data,
    error,
  };
};
