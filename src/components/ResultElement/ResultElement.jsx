import PropTypes from "prop-types";
import {
  HelperListItem,
  HelperListItemTitle,
  ResultListItem,
  ResultListItemBaseMark,
  ResultListItemBasePart,
  ResultListItemBasePartQuestion,
  ResultListItemList,
} from "./ResultElement.styled";
function ResultElement({ userAnswer, correctAnswer, question }) {
  return (
    <ResultListItem>
      <ResultListItemBasePart>
        <ResultListItemBasePartQuestion>
          {question}
        </ResultListItemBasePartQuestion>
        <ResultListItemList>
          <HelperListItem>
            <HelperListItemTitle>Your answer:</HelperListItemTitle>
            <p>{userAnswer}</p>
          </HelperListItem>
          <HelperListItem>
            <HelperListItemTitle>Correct answer:</HelperListItemTitle>
            <p>{correctAnswer}</p>
          </HelperListItem>
        </ResultListItemList>
      </ResultListItemBasePart>
      <ResultListItemBaseMark>
        <p>{userAnswer === correctAnswer ? 1 : 0} / 1</p>
      </ResultListItemBaseMark>
    </ResultListItem>
  );
}

export default ResultElement;

ResultElement.propTypes = {
  userAnswer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};
