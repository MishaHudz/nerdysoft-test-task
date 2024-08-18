import { NavLink, Outlet } from "react-router-dom";
import {
  PageHeader,
  PageHeaderContainer,
  PageHeaderLogo,
} from "./Layout.styled";
import quizImage from "../../assets/images/quiz.png";

function Layout() {
  return (
    <>
      <PageHeader>
        <PageHeaderContainer>
          <NavLink to="/">
            <PageHeaderLogo src={quizImage} alt="quiz" />
          </NavLink>
        </PageHeaderContainer>
      </PageHeader>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
