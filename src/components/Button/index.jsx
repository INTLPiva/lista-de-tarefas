import React from "react";
import { ButtonStyled, ButtonDisabled } from "./styles";

export function Button({ name, disabled = false, active = false, ...rest }) {
  return (
    <>
      {disabled ? (
        <ButtonDisabled>{name}</ButtonDisabled>
      ) : (
        <ButtonStyled active={active} {...rest}>
          {name}
        </ButtonStyled>
      )}
    </>
  );
}
