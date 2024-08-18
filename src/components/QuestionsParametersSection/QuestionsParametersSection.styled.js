import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

const { colors, radii, fontSizes } = theme;

export const QuestForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ParametersFormFieldset = styled.fieldset`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 30px;
  padding-bottom: 20px;

  margin-bottom: 30px;
  border-radius: ${radii.xl};

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const ParametersFormLegend = styled.legend`
  color: ${colors.borderGreenAccentColor};
  font-size: ${fontSizes.s};
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1440px) {
  }
`;

export const QuestSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1440px) {
  }
`;
