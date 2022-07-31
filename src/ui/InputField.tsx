import React from 'react';
import styled from 'styled-components';

type Props = {
  onChange:  React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder: string;
  value:string;
  name: string;
};

export const InputField: React.FC<Props> = ({
  onChange,
  type,
  placeholder,
  value,
  name
}: Props) => {
  return <Input name={name} onChange={onChange} type={type} value={value} placeholder={placeholder} />;
};

const Input = styled.input`
  color: #2f3542;
  padding: 10px;
  border:1px solid #7bed9f;
  border-radius: 5px;
  width: 100%;
  &:focus{
  outline: none;
  border:1px solid #2ed573;
`;
