import { useState } from "react";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import CategorySelector from "../CategorySelector/CategorySelector";
import PlayBtn from "../PlayBtn/PlayBtn";
import LuckyBtn from "../LuckyBtn/LuckyBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getQuestList } from "../../redux/questions/questionOperation";
import {
  ParametersFormFieldset,
  QuestSection,
  QuestForm,
  ParametersFormLegend,
} from "./QuestionsParametersSection.styled.js";

function QuestionsParametersSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      getQuestList({
        ...(selectedCategory && { category: selectedCategory }),
        ...(selectedDifficulty && { difficulty: selectedDifficulty }),
      })
    );
    navigate("/play-page");
  };

  return (
    <QuestSection>
      <LuckyBtn />
      <QuestForm onSubmit={onFormSubmit}>
        <ParametersFormFieldset>
          <ParametersFormLegend>Difficulty choice</ParametersFormLegend>
          <DifficultySelector
            setSelectedDifficulty={setSelectedDifficulty}
            selectedDifficulty={selectedDifficulty}
          />
        </ParametersFormFieldset>
        <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <PlayBtn
          selectedDifficulty={selectedDifficulty}
          selectedCategory={selectedCategory}
        />
      </QuestForm>
    </QuestSection>
  );
}

export default QuestionsParametersSection;
