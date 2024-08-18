import PropTypes from "prop-types";
import { DifficultyInput, DifficultyLabel } from "./DifficultySelector.styled";

function DifficultySelector({ setSelectedDifficulty, selectedDifficulty }) {
  return (
    <>
      <DifficultyLabel>
        <DifficultyInput
          type="radio"
          value=""
          checked={selectedDifficulty === ""}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Any</span>
      </DifficultyLabel>

      <DifficultyLabel>
        <DifficultyInput
          type="radio"
          value="easy"
          checked={selectedDifficulty === "easy"}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Easy</span>
      </DifficultyLabel>

      <DifficultyLabel>
        <DifficultyInput
          type="radio"
          value="medium"
          checked={selectedDifficulty === "medium"}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Medium</span>
      </DifficultyLabel>
      <DifficultyLabel>
        <DifficultyInput
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
