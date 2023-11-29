import DashboardHeader from "../../componets/DashboardHeader";
import Sidebar from "../../componets/Sidebar";

function AllMessages() {
  return (
    <div>
      <div className="h-screen bg-blue-50">
        <DashboardHeader />
        <div className="grid grid-cols-12 pt-20">
          <div className="w-full col-span-3">
            <Sidebar />
          </div>
          <div className="p-8  h-screen col-span-9">
            <h1>All Message Are in this Section</h1>
            <table>
              <thead className="bg-blue-500">
                <tr>
                  <th>User No</th>
                  <th>Dates</th>
                  <th>From</th>
                  <th>to</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>27/11/2023</td>
                  <td>Muheto Hodal</td>
                  <td>mhthodol@gmail.com</td>
    
                  <td colSpan={3} className="flex gap-4 ">
                    <div className="cursor-pointer text-green-400">
                      <button className="hover:bg-green-900 hover:rounded-sm px-2">
                        View
                      </button>
                    </div>
                    <div className="cursor-pointer text-yellow-400">
                      <button className="hover:bg-yellow-900 hover:rounded-sm px-2">
                        Edit
                      </button>
                    </div>
                    <div className="cursor-pointer text-red-400">
                      {" "}
                      <button className="hover:bg-red-800 hover:rounded-sm px-2">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMessages;
