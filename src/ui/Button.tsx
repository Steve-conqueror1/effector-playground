import styled from "styled-components";
import React from "react";
type Props = {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<Props> = (props: Props) => {
    const {children, onClick} = props
 return <ButtonEl onClick={onClick}>{children}</ButtonEl>
}

const ButtonEl = styled.button`
  border-radius: 5px;
  color: #fff;
  background-color: #ffa502;
  border:0;
  padding: 10px 6px;
  margin: 0 10px;
  width: 150px;
  
  &:hover{
  cursor: pointer;
  }

`
