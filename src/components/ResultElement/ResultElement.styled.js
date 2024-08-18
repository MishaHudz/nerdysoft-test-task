import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

const { colors, fontSizes } = theme;

export const ResultListItem = styled.li`
  background-color: ${({ $correct }) =>
    $correct ? colors.borderGreenAccentColor : colors.radioInside};
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  color: ${colors.white};
  border-radius: 30px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    padding: 30px 50px;
    border-radius: 100px;
  }
`;

export const ResultListItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`;

export const HelperListItem = styled.li`
  width: 100%;
  border: 1px solid white;
  padding: 5px 0px;
  border-radius: 30px;
  font-size: 10px;

  @media (min-width: 768px) {
    padding: 10px 0px;
    width: 50%;
    font-size: 12px;
  }

  @media (min-width: 1440px) {
  }
`;

export const ResultListItemBasePartQuestion = styled.p`
  text-align: left;
  margin-bottom: 20px;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1440px) {
  }
`;

export const ResultListItemBasePart = styled.div`
  width: 80%;
`;
export const ResultListItemBaseMark = styled.div`
  font-size: ${fontSizes.s};
  width: 20%;

  @media (min-width: 768px) {
    font-size: ${fontSizes.m};
  }

  @media (min-width: 1440px) {
    font-size: ${fontSizes.l};
  }
`;

export const HelperListItemTitle = styled.p`
  @media (min-width: 768px) {
    margin-bottom: 5px;
  }

  @media (min-width: 1440px) {
  }
`;
