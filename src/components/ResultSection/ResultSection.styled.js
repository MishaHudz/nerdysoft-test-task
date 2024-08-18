import styled from "styled-components";

export const ResultListContainer = styled.div`
  margin-top: 30px;
  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

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
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 75%;
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
