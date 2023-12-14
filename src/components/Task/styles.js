import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgb(39, 38, 38);
  padding: 1rem;

  h3 {
    color: rgb(117, 46, 209);
    font-size: 1.5rem;
    font-weight: bold;
    word-wrap: break-word;
  }

  p {
    font-size: 1rem;
    color: rgb(179, 178, 178);
    margin-top: 0.5rem;
    word-wrap: break-word;
  }

  .icon {
    font-size: 2rem;
    margin-left: 0.5rem;
    cursor: pointer;

    transition: all 0.2s;
  }

  .trash:hover {
    color: red;
  }

  .check:hover {
    color: rgb(4, 192, 104);
  }

  .content {
    width: 93%;
  }

  @media (max-width: 900px) {
    .content {
      width: 80%;
    }
  }

  @media (max-width: 600px) {
    .content {
      width: 70%;
    }
  }
`;
