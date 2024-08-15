import { useState } from "react";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import CategorySelector from "../CategorySelector/CategorySelector";

function QuestionsParametersSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section>
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
