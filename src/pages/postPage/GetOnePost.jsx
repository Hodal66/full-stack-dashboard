import { Link } from "react-router-dom";
import DashboardHeader from "../../componets/DashboardHeader";
import Sidebar from "../../componets/Sidebar";
import { myPostHookContainer } from "../../hooks/OnePostHook";

function GetOnePost() {
  const { error, loading, data } = myPostHookContainer(6);
  console.log("My Result is::",loading,myPostHookContainer(6));
  if (error)
    return (
      <div className="flex justify-center pt-28 items-center text-red-500">
        <p>There might be an Error</p>
      </div>
    );
  if (loading) return  <div className="flex justify-center items-center  pt-28 text-blue-500">Data is now Loading</div>;

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
                  <span className="font-normal text-blue-500">{data.id}</span>
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
