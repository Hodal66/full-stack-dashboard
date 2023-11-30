/* eslint-disable react-hooks/rules-of-hooks */
import {useQuery,gql} from "@apollo/client"

const usersContainer = gql`

query GetAllUsers {
  getAllUsers {
    id
    ages
    confirmPassword
    createdAt
    email
    fullName
    password
    sex
    token
  }
}`

export const allUserHookContainer = () =>{
    const {error,data,loading} = useQuery(usersContainer)
    return {error,data,loading}
}