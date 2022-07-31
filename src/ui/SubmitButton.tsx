import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  disabled?: boolean
};

export const SubmitButton: React.FC<Props> = ({  text, disabled }: Props) => {
  return <Button disabled={disabled}>{text}</Button>;
};

const Button = styled.button`
color: #fff;
width: 100%;
padding: 10px;
border:0;
border-radius: 5px;
background: #7bed9f;
transition: all .5s;
&:hover{
  cursor: pointer;
}

&[disabled]{
background: #d5f9e0;
cursor: not-allowed;
}
`;
