import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from  "./pages/login/Login"; 
import SignUp from  "./pages/signup/SignUp"; 
import {Toaster} from "react-hot-toast"
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        
      <Toaster/>
      </div>
    </>
  );
}

export default App;
