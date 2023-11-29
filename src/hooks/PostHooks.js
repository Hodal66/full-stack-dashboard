/* eslint-disable react-hooks/rules-of-hooks */
import {useQuery,gql} from "@apollo/client"

const postsContainer = gql`

query GetAllPosts {
  getAllPosts {
    id
    title
    content
    author
    createdAt
  }
}`

export const postsHookContainer = () =>{
    const {error,data,loading} = useQuery(postsContainer)
    return {error,data,loading}
}