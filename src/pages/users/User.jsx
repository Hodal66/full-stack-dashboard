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
  let params = useParams();
  console.log(params.userID)
  const [userDetail,setUserDetail] = useState(params.userID)

const [fetchUserData, { data, error, loading }] = useLazyQuery(
  USER_QUERY_CONTAINER,
  {
    variables: {
      id: userDetail,
    },
  }
); //
if (loading) return <div>Data is Loading....</div>;
if (error) return <div>There are an error : {error}</div>;

console.log(fetchUserData);
console.log("My Data:: ", data);

return (
  <div>
    <div className="h-screen bg-blue-50">
      <DashboardHeader />
      <div className="grid grid-cols-12 pt-20">
        <div className="w-full col-span-3">
          <Sidebar />
        </div>

        <div className="p-8  h-screen col-span-9 my-12">
          <h1>We got a user now</h1>
          <h1>Search User Right now!!</h1>

       <div className="my-8">
       <input
            type="search"
            placeholder="Please Enter userID.."
            className="p-2 rounded-sm"
            onChange={(event) => setUserDetail(event.target.value)}
          />
          <button
            onClick={fetchUserData}
            className="bg-blue-500  p-2 rounded-md "
          >
            Search Now
          </button>
       </div>

          {data && (
            <div>
              <p>
                <span className="font-bold text-blue-800"> User ID : </span>
                {data.getOneUser.id}
              </p>
              <p>
                <span className="font-bold text-blue-800">
                  Your Full Name is :
                </span>
                {data.getOneUser.fullName}
              </p>
              <p>
                {" "}
                <span className="font-bold text-blue-800">
                  Your Email Address is :
                </span>
                {data.getOneUser.email}
              </p>
              <p>
                <span className="font-bold text-blue-800">
                  Time Created is :
                </span>
                {data.getOneUser.createdAt}
              </p>
              <p>
                <span className="font-bold text-blue-800">Yor Token is : </span>
                {data.getOneUser.token}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}

export default User;
