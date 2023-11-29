/* eslint-disable react-hooks/rules-of-hooks */
import {useQuery,gql} from "@apollo/client"

const postContainer = gql`
query GetOnePost($id: ID!) {
  getOnePost(ID: $id) {
    id
    title
    content
    author
    createdAt
  }
}
`

export const myPostHookContainer = (ID) =>{
const {error,data,loading} = useQuery(postContainer,{
    variables:{
        ID
    }
})
return {
    error,
    data,
    loading
}
}