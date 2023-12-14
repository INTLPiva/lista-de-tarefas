import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ active }) =>
    active ? "rgb(104, 42, 186)" : "rgb(130, 52, 233)"};
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.2em;
  height: 50px;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ active }) =>
      active ? "rgb(94, 38, 167)" : "rgb(117, 46, 209)"};
  }
`;

export const ButtonDisabled = styled.button`
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.2em;
  height: 50px;
  background-color: rgb(92, 92, 92);
  cursor: not-allowed;
`;
