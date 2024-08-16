import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCategoriesList } from "../../redux/categories/categoriesOperation";

function CategorySelector({ selectedCategory, setSelectedCategory }) {
  const categoriesList = useSelector(
    (store) => store.categories.categoriesList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoriesList) {
      return;
    }
    // dispatch(getCategoriesList());
  }, [categoriesList, dispatch]);

  return <ul>{`${selectedCategory} + 5 + ${setSelectedCategory}`}</ul>;
}

export default CategorySelector;

CategorySelector.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
