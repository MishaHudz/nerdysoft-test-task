import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/"> Home</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
