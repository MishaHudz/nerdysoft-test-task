import styled from "styled-components";

export const QuestForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ParametersFormFieldset = styled.fieldset`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 10px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const QuestSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
