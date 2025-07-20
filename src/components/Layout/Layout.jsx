import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <>
      <Navbar />
      <div className="w-full h-100 flex items-center justify-center bg-blue-200">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
