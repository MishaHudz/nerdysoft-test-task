import styled from "styled-components";
import { theme } from "../../stylesheet/theme";
const { colors, radii, borders } = theme;

export const QuestionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
  }
`;

export const QuestionCard = styled.div`
  border: ${borders.medium + "" + colors.borderMainAccentColor};
  background-color: ${colors.mainAccentColor};
  border-radius: ${radii.xl};
  padding: 60px 0px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const QuestionInformationContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0px;
  }

  @media (min-width: 1440px) {
  }
`;

export const QuestionInformationCount = styled.p`
  text-align: end;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
    text-align: left;
  }

  @media (min-width: 1440px) {
  }
`;

export const QuestionInformationTitle = styled.h1`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
  }
`;

export const QuestionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;
