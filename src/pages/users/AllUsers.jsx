import DashboardHeader from "../../componets/DashboardHeader";
import Sidebar from "../../componets/Sidebar";

function AllUsers() {
  return (
    <>
      <div  className="h-screen bg-blue-50" >
        <DashboardHeader/>
        <div className="grid grid-cols-12 pt-20">
          <div className="w-full col-span-3">
            <Sidebar />
          </div>
          <div className="p-8  h-screen col-span-9">
            <h1>Welcome to main Dashboard </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllUsers;
