import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearLists } from "../../redux/questions/questionSlice";
import { HomePageButton } from "./HomePageBtn.styled";

function HomePageBtn({ text }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHomeBtnClick = () => {
    navigate("/");
    dispatch(clearLists());
  };

  return <HomePageButton onClick={onHomeBtnClick}>{text}</HomePageButton>;
}

export default HomePageBtn;

HomePageBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
