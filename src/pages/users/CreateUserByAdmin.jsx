import { useState } from "react";
import DashboardHeader from "../../componets/DashboardHeader";
import Sidebar from "../../componets/Sidebar";
import { useMutation, gql } from "@apollo/client";

const CREATE_USER_MUTATION = gql`
  mutation CreateNewUser($userInput: UserInput) {
    createNewUser(userInput: $userInput) {
      id
      fullName
      email
      password
      confirmPassword
      sex
      ages
      createdAt
      token
    }
  }
`;

function CreateUserByAdmin() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ages, setAges] = useState("");
  const [gender, setGender] = useState("Male");

//   const [newError,setNewError] = useState("");


  const [createNewUserFunction, { data, error, loading }] =
    useMutation(CREATE_USER_MUTATION);
  const changeGenderFunc = () => {
    if (gender === "Male") {
      setGender("Female");
    }
    console.log("gender Now is:", gender);
  };
   
  if (loading) return <div>Data is Loading....</div>;
  if (error) return <div>Something Wnt wrong....</div>;
  if (data) {
    console.log("Data to be send :", data);
  }
  return (
    <div className="h-screen bg-blue-50">
      <DashboardHeader />
      <div className="grid grid-cols-12 pt-20">
        <div className="w-full col-span-3">
          <Sidebar />
        </div>
        <div className="p-8  h-screen col-span-9">
          <h1>Welcome to main Dashboard </h1>
          <form action="#" className=" w-full flex  items-center py-8">
            <div className="flex gap-20">
              <div className="">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="border p-2 rounded-sm"
                    onChange={(event) => {
                      setFullName(event.target.value);
                      console.log("Full Name", fullName);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Enter Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="border p-2 rounded-sm"
                    onChange={(event) => {
                      setEmail(event.target.value);
                      console.log("Your Email: ", email);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name=""
                    id="password"
                    placeholder="********"
                    className="border p-2 rounded-sm"
                    onChange={(event) => {
                      setPassword(event.target.value);
                      console.log("Password is: ", password);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name=""
                    id="ConfirmPasswor"
                    placeholder="********"
                    className="border p-2 rounded-sm"
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                      console.log(confirmPassword);
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="ages">Ages</label>
                  <input
                    type="number"
                    name=""
                    id="number"
                    placeholder="Enter Your Ages"
                    className="border p-2 rounded-sm"
                    onChange={(event) => {
                      setAges(event.target.value);
                      console.log(ages);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Chhose your Gender</h1>
                  <div className="cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      id="GenderMale"
                      onClick={changeGenderFunc}
                      value={gender}
                    />{" "}
                    <label htmlFor="GenderMale">Male</label>
                  </div>
                  <div className="cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      id="GenderFemale"
                      value={gender}
                      onClick={changeGenderFunc}
                    />{" "}
                    <label htmlFor="GenderFemale">Femail</label>
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-2">
                  <button
                    className="bg-blue-500 w-full p-2 rounded-md "
                    onClick={() => {
                      createNewUserFunction({
                        variables: {
                            userInput: {
                            fullName,
                            email,
                            password,
                            confirmPassword,
                            ages,
                          },
                        },
                        
                      })
                    }}
                  >
                    {" "}
                    Create New User{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUserByAdmin;
