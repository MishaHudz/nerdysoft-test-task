import { useDispatch } from "react-redux";
import QuestionSection from "../../components/QuestionSection/QuestionSection";
import { useEffect } from "react";
import { clearAnswersList } from "../../redux/questions/questionSlice";

function PlayPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAnswersList());
  }, [dispatch]);

  return <QuestionSection />;
}

export default PlayPage;
