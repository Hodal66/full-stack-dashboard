import './App.css'
import Home from "./pages/homePage/Home";
import AllUsers from "./pages/users/AllUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/users/Register";
import Login from "./pages/users/Login";
import OnlyUsers from './pages/users/OnlyUsers';
import AllMessages from './pages/messages/AllMessages';
import User from './pages/users/User';
import AllPosts from './pages/postPage/AllPosts';
import GetOnePost from './pages/postPage/GetOnePost';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/only-users" element={<OnlyUsers />} />
          <Route path="/users/:userID" element={<User/>} />
          <Route exact path="/register-user" element={<Register/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/all-messages" element={<AllMessages />} />
          <Route exact path="/all-posts" element={<AllPosts />} />
          <Route exact path="/posts/:postId" element={<GetOnePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
