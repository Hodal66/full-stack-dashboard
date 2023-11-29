import { Link } from "react-router-dom";
import Navbar from "../../componets/Navbar";

function Login() {
  return (
    <div>
      <Navbar />

      <form action="./users" className=" flex justify-center items-center">
        <div>
          <h1>Login Form</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border p-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="********"
              className="border p-2 rounded-sm"

            />
          </div>
          <div>
            If you doesn&apos;t have an account{" "}
            <Link to={"/register-user"}>Register Here</Link>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <input
              type="submit"
              value="Login Now"
              className="bg-blue-500 w-full p-2 rounded-md "
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
