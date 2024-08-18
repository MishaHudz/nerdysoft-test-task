import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

const { colors, transitions, radii } = theme;

export const CardWrapper = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1440px) {
    width: 30%;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ selected }) =>
    selected ? `${colors.white}` : `${colors.mainText}`};
  display: flex;
  border: 1px solid;
  border-radius: ${radii.m};
  padding: 15px 10px;
  cursor: pointer;
  transition: ${transitions.regular};
  border-color: ${({ selected }) =>
    selected
      ? `${colors.borderSecondAccentColor}`
      : `${colors.borderMainAccentColor}`};
  background-color: ${({ selected }) =>
    selected ? `${colors.secondAccentColor}` : `${colors.mainAccentColor}`};

  &:hover {
    scale: 1.1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const HiddenRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const CardContent = styled.div`
  text-align: center;
`;
