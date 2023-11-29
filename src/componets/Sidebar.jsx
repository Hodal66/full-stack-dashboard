import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className=" text-white fixed bg-slate-500  h-screen w-1/5 ">
      <section className=" flex flex-col gap-12">
        <div>
          <h1 className="font-extrabold text-3xl p-8">User Management</h1>
        </div>
        <div>
          <ul className="flex flex-col">
            <Link to={"/only-users"}>
              <li className="font-medium cursor-pointer px-8 py-2 hover:bg-green-400 duration-75">Users</li>
            </Link>
            <Link to={"/all-messages"}>
              <li className="font-medium cursor-pointer px-8 py-2 hover:bg-green-400">Messages</li>
            </Link>
            <Link to={"/all-posts"}>
              <li className="font-medium cursor-pointer px-8 py-2 hover:bg-green-400">All Posts</li>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
