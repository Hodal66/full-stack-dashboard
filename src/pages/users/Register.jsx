import { Link } from "react-router-dom";
import Navbar from "../../componets/Navbar";

function Register() {
  return (
    <div>
      <Navbar />
      <form action="./users" className=" w-full flex justify-center items-center">
        <div>
          <h1>Register Form</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="border p-2 rounded-sm"
            />
          </div>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="********"
              className="border p-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ages">Ages</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Ages"
              className="border p-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Chhose your Gender</h1>
            <div>
              <input type="radio" name="gender" id="Gender" value={""} />{" "}
              <label htmlFor="Gender">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" id="Gender" value={""} />{" "}
              <label htmlFor="Gender">Femail</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            Do you Have account? <Link to={"/login"}>Login</Link>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <input
              type="submit"
              value="Register"
              className="bg-blue-500 w-full p-2 rounded-md "
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
