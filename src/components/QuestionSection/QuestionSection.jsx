import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuestList } from "../../redux/questions/questionOperation";

function QuestionSection() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestList());
  }, [dispatch]);

  return <section></section>;
}

export default QuestionSection;
