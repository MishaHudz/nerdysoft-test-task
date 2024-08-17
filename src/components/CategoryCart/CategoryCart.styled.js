import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 30%;
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

export const Label = styled.label`
  color: black;
  display: flex;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fff;
  border-color: ${({ selected }) => (selected ? "#007bff" : "#ccc")};
  background-color: ${({ selected }) => (selected ? "#f0f8ff" : "#fff")};
`;

export const CardContent = styled.div`
  text-align: center;
`;
