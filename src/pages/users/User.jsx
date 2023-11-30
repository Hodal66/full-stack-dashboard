import { useParams } from "react-router-dom";
import DashboardHeader from "../../componets/DashboardHeader";
import Sidebar from "../../componets/Sidebar";
import {gql, useLazyQuery} from "@apollo/client"
import { useState } from "react";

const USER_QUERY_CONTAINER =gql`
query GetOneUser($id: ID!) {
  getOneUser(ID: $id) {
    token
    sex
    id
    fullName
    email
    createdAt
    ages
  }
}
`

function User() {
  const [userDetail,setUserDetail] = useState('')
  let params = useParams();
  console.log(params.userID)
const [fetchUserData,{data,error,loading}] = useLazyQuery(USER_QUERY_CONTAINER,{
  variables:{
    id:params.userID
  }
});//
if(loading) return <div>Data is Loading....</div>
if(error) return <div>There are an error : {error}</div>


console.log(fetchUserData());

  return (
    <div>
      <div className="h-screen bg-blue-50">
        <DashboardHeader />
        <div className="grid grid-cols-12 pt-20">
          <div className="w-full col-span-3">
            <Sidebar />
          </div>
          {
            data &&  <div className="p-8  h-screen col-span-9">
            <h1>We got a user now</h1>
            <h1>Search User Right now!!</h1>


            <input type="search" placeholder="Please search any user.." onChange={(event)=>setUserDetail(event.target.value)}/>
            <button onClick={()=>fetchUserData()}>Search Now</button>

            {userDetail && <div>New Data : {userDetail}</div>}

          </div>
          }
         
        </div>
      </div>
    </div>
  );
}

export default User;
