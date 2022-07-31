import React from 'react';
import styled from 'styled-components';

type Props = {
  handleSubmit: () => void;
  children: React.ReactNode;
};

export const AuthForm: React.FC<Props> = ({
  handleSubmit,
  children,
}: Props) => {
  return <Form onSubmit={handleSubmit}>{children} </Form>;
};

const Form = styled.form`
  color: #fff,
  display: flex, 
`;
