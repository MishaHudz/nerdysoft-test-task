import styled from "styled-components";

export const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const ResSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const ScoreContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const ScoreContainerTitle = styled.h2`
  margin-bottom: 10px;
`;

export const ScoreContainerDescription = styled.p`
  font-size: 30px;
`;

export const ScoreContainerDescriptionAccent = styled.span`
  color: #ff0000;
`;
