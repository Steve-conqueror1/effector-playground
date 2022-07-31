import React from 'react';
import styled from 'styled-components';

type Props = {
  onSubmit:  React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
};

export const AuthForm: React.FC<Props> = ({ onSubmit, children }: Props) => {
  return <Form onSubmit={onSubmit}>{children} </Form>;
};

const Form = styled.form`
  height: 400px;
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 12px;
  border: 1px solid #ffa502;
  
`;
