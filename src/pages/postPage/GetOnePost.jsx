import { Link, useParams } from "react-router-dom";
import DashboardHeader from "../../componets/DashboardHeader";
import Sidebar from "../../componets/Sidebar";
import { gql, useLazyQuery } from "@apollo/client";

const GET_ONE_POST = gql`
  query GetOneMessage($postId: ID!) {
    getOneMessage(ID: $postId) {
      title
      id
      createdAt
      author
    }
  }
`;

function GetOnePost() {
  let param = useParams();
  const  dataToBeFetched = useLazyQuery(GET_ONE_POST,{
    variables:{
      postId:param.ID
    }
  });

  console.log(dataToBeFetched);
 
  console.log(param.ID);//


  return (
    <div>
      <div className="h-screen bg-blue-50">
        <DashboardHeader />
        <div className="grid grid-cols-12 pt-20">
          <div className="w-full col-span-3">
            <Sidebar />
          </div>
          <div className="p-8  h-screen col-span-9">
            <Link to={"/all-posts"}>
              <span className="bg-blue-500 py-4 px-8 rounded-sm text-white font-semibold my-4">
                👈 Back
              </span>
            </Link>
            <h1 className="my-8">We got a post now</h1>
            <div>
              <div>
                <p className="font-extrabold text-2xl text-blue-950 p-4">
                  We Have ID:{" "}
                  <span className="font-normal text-blue-500">{param.ID}</span>
                </p>
                <p className="font-extrabold text-2xl text-blue-950 p-4">
                  Main Title:{" "}
                  <span className="font-normal text-blue-500">new post 1</span>
                </p>
                <p className="font-extrabold text-2xl text-blue-950 p-4">
                  Main Content:{" "}
                  <span className="font-normal text-blue-500">
                    Ndagukora tu ndashaka kubona ID
                  </span>
                </p>
                <p className="font-extrabold text-2xl text-blue-950 p-4">
                  Was Created At:{" "}
                  <span className="font-normal text-blue-500">
                    Hodal programer
                  </span>
                </p>
                <p className="font-extrabold text-2xl text-blue-950 p-4">
                  Was Created By:{" "}
                  <span className="font-normal text-blue-500">29/12/2013</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetOnePost;
