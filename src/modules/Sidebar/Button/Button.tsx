import React from "react";
import styled from "styled-components";

interface IButtonProps {
    value: string | number
    width: string
}

export const Button = ({value, width}: IButtonProps) => {
    return (
        <Container $width={width}>{value}</Container>
    )
}

const Container = styled.div<{ $width: string }>`
  width: ${({$width}) => $width};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  border: 1px solid #E2E3E5;
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
`