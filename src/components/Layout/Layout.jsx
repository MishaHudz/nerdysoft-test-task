import { NavLink, Outlet } from "react-router-dom";
import { PageHeader } from "./Layout.styled";

function Layout() {
  return (
    <>
      <PageHeader>
        <NavLink to="/">Home</NavLink>
      </PageHeader>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
