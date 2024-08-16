import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Question from "../Question/Question";
import HomePageBtn from "../HomePageBtn/HomePageBtn";

function QuestionSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionList = useSelector((store) => store.question.questionList);
  //   const answerList = useSelector((store) => store.question.answerList);

  const navigate = useNavigate();

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
      />
      <HomePageBtn />
    </section>
  );
}

export default QuestionSection;
