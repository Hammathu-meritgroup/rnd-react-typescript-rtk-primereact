
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidenav from "./Sidenav";
function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidenav></Sidenav>
      <div className="content-wrapper">
        <section className="content">
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default Layout