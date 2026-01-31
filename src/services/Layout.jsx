import Navbar from "./navbar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="routes">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
