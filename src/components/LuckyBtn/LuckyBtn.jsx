import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuestList } from "../../redux/questions/questionOperation";
import { LuckyButton } from "./LuckyBtn.styled";

function LuckyBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.question.isLoading);

  const onRandomButtonClick = async () => {
    await dispatch(getQuestList());
    navigate("/play-page");
  };

  return (
    <LuckyButton disabled={isLoading} onClick={onRandomButtonClick}>
      I&apos;m lucky
    </LuckyButton>
  );
}

export default LuckyBtn;
