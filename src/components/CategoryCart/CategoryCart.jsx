import PropTypes from "prop-types";
import {
  CardContent,
  CardWrapper,
  HiddenRadio,
  Label,
} from "./CategoryCart.styled";

function CategoryCart({ onChange, id, name, value, category, selected }) {
  return (
    <CardWrapper>
      <HiddenRadio
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={id} selected={selected}>
        <CardContent>
          <h3>{category}</h3>
        </CardContent>
      </Label>
    </CardWrapper>
  );
}

export default CategoryCart;

CategoryCart.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};
