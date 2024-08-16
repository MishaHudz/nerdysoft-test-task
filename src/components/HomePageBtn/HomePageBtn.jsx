import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearLists } from "../../redux/questions/questionSlice";
import { HomePageButton } from "./HomePageBtn.styled";

function HomePageBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHomeBtnClick = () => {
    navigate("/");
    dispatch(clearLists());
  };

  return <HomePageButton onClick={onHomeBtnClick}>Go Home</HomePageButton>;
}

export default HomePageBtn;
