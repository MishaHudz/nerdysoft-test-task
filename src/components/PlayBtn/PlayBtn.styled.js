import styled from "styled-components";

export const PlayButton = styled.button`
  border: 1px solid white;
  padding: 5px 20px;
  border-radius: 20px;

  &:disabled {
    color: grey;
    border-color: grey;
    cursor: default;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;
