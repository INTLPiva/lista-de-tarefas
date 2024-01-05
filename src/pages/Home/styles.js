import styled from "styled-components";

export const Container = styled.div`
  background-color: #353434;
  width: 100%;
  height: 100%;
  padding: 2rem;
  color: white;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Wrapper = styled.div`
  background-color: #454344;
  width: fit-content;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 550px) {
    flex-direction: column;

    div,
    button {
      width: 100%;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
