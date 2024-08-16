import { useState } from "react";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import CategorySelector from "../CategorySelector/CategorySelector";
import { useNavigate } from "react-router-dom";

function QuestionsParametersSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  const onRandonButtonClick = () => {
    navigate("/play-page");
  };

  return (
    <section>
      <button onClick={onRandonButtonClick}>I'm lucky</button>
      <form>
        <DifficultySelector
          setSelectedDifficulty={setSelectedDifficulty}
          selectedDifficulty={selectedDifficulty}
        />
        <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </form>
      <button>Play</button>
    </section>
  );
}

export default QuestionsParametersSection;
