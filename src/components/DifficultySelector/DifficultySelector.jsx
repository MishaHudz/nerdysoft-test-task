import PropTypes from "prop-types";
import { DifficultyLabel } from "./DifficultySelector.styled";

function DifficultySelector({ setSelectedDifficulty, selectedDifficulty }) {
  return (
    <>
      <DifficultyLabel>
        <input
          type="radio"
          value=""
          checked={selectedDifficulty === ""}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Any</span>
      </DifficultyLabel>

      <DifficultyLabel>
        <input
          type="radio"
          value="easy"
          checked={selectedDifficulty === "easy"}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Easy</span>
      </DifficultyLabel>

      <DifficultyLabel>
        <input
          type="radio"
          value="medium"
          checked={selectedDifficulty === "medium"}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Medium</span>
      </DifficultyLabel>
      <DifficultyLabel>
        <input
          type="radio"
          value="hard"
          checked={selectedDifficulty === "hard"}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Hard</span>
      </DifficultyLabel>
    </>
  );
}

export default DifficultySelector;

DifficultySelector.propTypes = {
  setSelectedDifficulty: PropTypes.func.isRequired,
  selectedDifficulty: PropTypes.string.isRequired,
};
