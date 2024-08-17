import PropTypes from "prop-types";
import he from "he";
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
          {he.decode(question)}
        </ResultListItemBasePartQuestion>
        <ResultListItemList>
          <HelperListItem>
            <HelperListItemTitle>Your answer:</HelperListItemTitle>
            <p>{he.decode(userAnswer)}</p>
          </HelperListItem>
          <HelperListItem>
            <HelperListItemTitle>Correct answer:</HelperListItemTitle>
            <p>{he.decode(correctAnswer)}</p>
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
