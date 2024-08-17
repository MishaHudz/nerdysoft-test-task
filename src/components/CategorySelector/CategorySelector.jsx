import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesList } from "../../redux/categories/categoriesOperation";
import CategoryCart from "../CategoryCart/CategoryCart";
import { CardList } from "./CategorySelector.styled";

function CategorySelector({ selectedCategory, setSelectedCategory }) {
  const categoriesList = useSelector(
    (store) => store.categories.categoriesList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoriesList) {
      return;
    }
    dispatch(getCategoriesList());
  }, [categoriesList, dispatch]);

  const onInputChecked = (evt) => {
    evt && setSelectedCategory(evt?.target?.value);
  };

  return (
    <CardList>
      {categoriesList?.map((category) => (
        <CategoryCart
          key={category.id}
          onChange={onInputChecked}
          id={category.id}
          name="category"
          value={String(category.id)}
          selected={selectedCategory === String(category.id)}
          category={category.name}
        />
      ))}
    </CardList>
  );
}

export default CategorySelector;

CategorySelector.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
