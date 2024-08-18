import PropTypes from "prop-types";
import he from "he";
import QuestionButtonElement from "../QuestionButtonElement/QuestionButtonElement";
import {
  QuestionList,
  QuestionTitle,
  QuestionInformationContainer,
  QuestionCard,
  QuestionInformationCount,
  QuestionInformationTitle,
} from "./Question.styled";

function Question({
  question,
  setCurrentQuestion,
  currentQuestion,
  questionList,
}) {
  const randomOrder = (incorrectList, correctAnswer) => {
    if (!incorrectList) {
      return [];
    }

    const randomIndexes = [];
    const randomAnswers = [];
    const answers = [correctAnswer, ...incorrectList];

    do {
      const randomIndex = Math.round(Math.random() * 3);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    } while (randomIndexes.length < 4);

    randomIndexes.map(
      (randomIndex, index) => (randomAnswers[index] = answers[randomIndex])
    );

    return randomAnswers;
  };

  return (
    <>
      <QuestionInformationContainer>
        <QuestionInformationTitle>
          {he.decode(question?.category || "")}
        </QuestionInformationTitle>
        <QuestionInformationCount>{` ${currentQuestion + 1} / ${
          questionList?.length
        } `}</QuestionInformationCount>
      </QuestionInformationContainer>
      <QuestionCard>
        <QuestionTitle>{he.decode(question?.question || "")}</QuestionTitle>
        <QuestionList>
          {randomOrder(
            question?.incorrect_answers,
            question?.correct_answer
          )?.map((answer, index) => (
            <QuestionButtonElement
              key={index}
              answer={answer}
              setCurrentQuestion={setCurrentQuestion}
            />
          ))}
        </QuestionList>
      </QuestionCard>
    </>
  );
}

export default Question;

Question.propTypes = {
  question: PropTypes.object.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  questionList: PropTypes.array.isRequired,
};
