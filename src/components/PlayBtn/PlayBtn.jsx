import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { PlayButton } from "./PlayBtn.styled";

function PlayBtn({ selectedDifficulty, selectedCategory }) {
  const isLoading = useSelector((store) => store.question.isLoading);

  return (
    <PlayButton
      disabled={!(selectedDifficulty || selectedCategory) || isLoading}
    >
      Play
    </PlayButton>
  );
}

export default PlayBtn;

PlayBtn.propTypes = {
  selectedDifficulty: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
