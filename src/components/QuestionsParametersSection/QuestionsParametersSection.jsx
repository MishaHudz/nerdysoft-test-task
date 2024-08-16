import { useState } from "react";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import CategorySelector from "../CategorySelector/CategorySelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getQuestList } from "../../redux/questions/questionOperation";

function QuestionsParametersSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRandomButtonClick = async () => {
    await dispatch(getQuestList());
    navigate("/play-page");
  };

  return (
    <section>
      <button onClick={onRandomButtonClick}>I&apos;m lucky</button>
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
