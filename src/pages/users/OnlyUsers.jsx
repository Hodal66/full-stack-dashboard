import { Link } from "react-router-dom";
import DashboardHeader from "../../componets/DashboardHeader";
import Sidebar from "../../componets/Sidebar";
import { allUserHookContainer } from "../../hooks/UserHooks";

function OnlyUsers() {
  const { error, loading, data } = allUserHookContainer();
  if (loading) return "Data is Loading....";
  if (error) return "Error Something is wrong!!";
  return (
    <div>
      <div className="h-screen bg-blue-50">
        <DashboardHeader />
        <div className="grid grid-cols-12 pt-20">
          <div className="w-full col-span-3">
            <Sidebar />
          </div>
          <div className="p-8  h-screen col-span-9">
            <h1>Only Users </h1>
            <table>
              <thead className="bg-blue-500">
                <tr>
                  <th>User No</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Ages</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.getAllUsers.map(({fullName,email,ages,sex,id}) => {
                    return (
                      <tr key={email}>
                        <td>{id} {console.log("My User Id Is::: "+id)}</td>
                        <td>{fullName}</td>
                        <td>{email}</td>
                        <td>{ages}</td>
                        <td>{sex}</td>
                        <td colSpan={3} className="flex gap-4 ">
                         <Link to={`/users/${id}`}>
                         <div className="cursor-pointer text-green-400">
                            <button className="hover:bg-green-900 hover:rounded-sm px-2">
                              View
                            </button>
                          </div>
                         </Link>
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
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlyUsers;
