import PropTypes from "prop-types";
import he from "he";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../../redux/questions/questionSlice";
import { useNavigate } from "react-router-dom";
import { QuestionBtn, QuestionItem } from "./QuestionButtonElement.styled";

function QuestionButtonElement({ answer, setCurrentQuestion }) {
  const answers = useSelector((state) => state.question.answerList);
  const questions = useSelector((state) => state.question.questionList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAnswerButtonClick = (evt) => {
    evt.currentTarget.blur();
    if (answers.length + 1 === questions.length) {
      navigate("/results-page");
      dispatch(addAnswer(evt.target.innerText));
      return;
    }
    dispatch(addAnswer(evt.target.innerText));
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <QuestionItem>
      <QuestionBtn onClick={onAnswerButtonClick}>
        {he.decode(answer)}
      </QuestionBtn>
    </QuestionItem>
  );
}

export default QuestionButtonElement;

QuestionButtonElement.propTypes = {
  answer: PropTypes.string.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
};
