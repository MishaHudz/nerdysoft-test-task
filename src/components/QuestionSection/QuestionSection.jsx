import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Question from "../Question/Question";
import HomePageBtn from "../HomePageBtn/HomePageBtn";
import { useDispatch } from "react-redux";
import { saveTime } from "../../redux/questions/questionSlice.js";

function QuestionSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionList = useSelector((store) => store.question.questionList);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveTime(Date.now()));
  }, [dispatch]);

  useEffect(() => {
    if (questionList) {
      return;
    }
    navigate("/");
  }, [navigate, questionList]);

  return (
    <section>
      <Question
        question={questionList ? questionList[currentQuestion] : {}}
        setCurrentQuestion={setCurrentQuestion}
        questionList={questionList ? questionList : []}
        currentQuestion={currentQuestion}
      />
      <HomePageBtn />
    </section>
  );
}

export default QuestionSection;
