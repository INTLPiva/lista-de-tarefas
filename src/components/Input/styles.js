import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  color: #000;
  width: 350px;

  & input {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    outline: none;
    color: black;
    font-size: 1em;
    background-color: #fff;
  }

  & span {
    position: absolute;
    left: 10px;
    padding: 15px;
    pointer-events: none;
    font-size: 1.2em;
    transition: 0.5s;
  }

  & input:valid ~ span,
  & input:focus ~ span {
    transform: translateX(10px) translateY(-7px);
    font-size: 1em;
    padding: 2px 20px;
    background-color: rgb(130, 52, 233);
    color: #fff;
    border-radius: 2px;
  }

  & input:focus,
  & input:valid {
    outline: 2px solid rgb(130, 52, 233);
  }
`;
