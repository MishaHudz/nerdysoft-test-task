import PropTypes from "prop-types";

function DifficultySelector({ setSelectedDifficulty, selectedDifficulty }) {
  return (
    <>
      <label>
        <input
          type="radio"
          value=""
          checked={selectedDifficulty === ""}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Any</span>
      </label>

      <label>
        <input
          type="radio"
          value="easy"
          checked={selectedDifficulty === "easy"}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Easy</span>
      </label>

      <label>
        <input
          type="radio"
          value="medium"
          checked={selectedDifficulty === "medium"}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Medium</span>
      </label>
      <label>
        <input
          type="radio"
          value="hard"
          checked={selectedDifficulty === "hard"}
          onChange={(evt) => setSelectedDifficulty(evt.target.value)}
        />
        <span>Hard</span>
      </label>
    </>
  );
}

export default DifficultySelector;

DifficultySelector.propTypes = {
  setSelectedDifficulty: PropTypes.func.isRequired,
  selectedDifficulty: PropTypes.string.isRequired,
};
