import { Link } from "react-router-dom";
import DashboardHeader from "../../componets/DashboardHeader";
import Sidebar from "../../componets/Sidebar";
import { postsHookContainer } from "../../hooks/PostHooks";

function AllPosts() {
  const { error, loading, data } = postsHookContainer();
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
            <h1>Only Posts </h1>
            <table>
              <thead className="bg-blue-500">
                <tr>
                  <th>Post ID</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>CreatedAt</th>
                  <th>Author</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.getAllPosts.map((post) => {
                    return (
                      <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                        <td>{post.createdAt}</td>
                        <td>{post.author}</td>
                        <td colSpan={3} className="flex gap-4 ">
                          <Link to={`/posts/${post.id}`}>
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

export default AllPosts;
