import { useSelector } from "react-redux";
import ResultElement from "../ResultElement/ResultElement";
import {
  ResSection,
  ResultList,
  ScoreContainer,
  ScoreContainerDescription,
  ScoreContainerDescriptionAccent,
  ScoreContainerTitle,
  ResultListContainer,
} from "./ResultSection.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomePageBtn from "../HomePageBtn/HomePageBtn";
import FinishTime from "../FinishTime/FinishTime";

function ResultSection() {
  const questionList = useSelector((store) => store.question.questionList);
  const answerList = useSelector((store) => store.question.answerList);

  const navigate = useNavigate();

  useEffect(() => {
    if (questionList) {
      return;
    }
    navigate("/");
  }, [navigate, questionList]);

  const resultCount = () => {
    let result = 0;

    answerList.map(
      (answer, i) => answer === questionList[i].correct_answer && result++
    );

    return `${result} `;
  };

  return (
    <ResSection>
      <ScoreContainer>
        <ScoreContainerTitle>Your result is:</ScoreContainerTitle>
        <ScoreContainerDescription>
          <ScoreContainerDescriptionAccent>
            {resultCount()}
          </ScoreContainerDescriptionAccent>
          / {questionList?.length}
        </ScoreContainerDescription>
      </ScoreContainer>
      <FinishTime />
      <HomePageBtn text="Go home" />
      <ResultListContainer>
        <ResultList>
          {questionList?.map((question, index) => (
            <ResultElement
              key={index}
              correctAnswer={question.correct_answer}
              userAnswer={answerList[index]}
              question={question.question}
            />
          ))}
        </ResultList>
      </ResultListContainer>
    </ResSection>
  );
}

export default ResultSection;
