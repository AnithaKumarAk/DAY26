import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Courses = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Courses;