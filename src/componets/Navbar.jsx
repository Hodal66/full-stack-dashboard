import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-200">
      <nav className=" flex justify-center items-center">
        <ul className="flex justify-between gap-10 py-8">
          <Link to={"/"}>
            <li className="cursor-pointer"><button>Home</button></li>
          </Link>
          <li className="cursor-pointer"><button>About</button></li>
          <li className="cursor-pointer"><button>Activities</button></li>
          <Link to={"/login"}>
            <li className="cursor-pointer"><button>Login</button></li>
          </Link>
          <Link to={"/register-user"}>
            <li className="cursor-pointer"><button>Register</button></li>
          </Link>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
