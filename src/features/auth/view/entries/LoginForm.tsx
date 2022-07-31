import React from 'react';
import styled from 'styled-components';
import { InputField, SubmitButton } from '../../../../ui';
import {Link, useNavigate} from 'react-router-dom';
import { AuthForm } from '../containers/Form';
import {$isAuthorised, setLogin} from "../../model/public";
import {$authData, $isValidLogin, login} from "../../model/private";
import {useStore} from "effector-react";

export const LoginForm = () => {
    const {username, password} =  useStore($authData)
    const isValidLogin =  useStore($isValidLogin)
    const isAuthorised =  useStore($isAuthorised)
    const navigate = useNavigate()
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
         setLogin({fieldName: e.currentTarget.name, value: e.currentTarget.value})
    }

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      login()
    }

    React.useEffect(() => {
        if(isAuthorised){
           navigate('/')
        }
    }, [isAuthorised])

  return (
    <Wrapper>
      <AuthForm onSubmit={handleSubmit}>
         <LoginFormHeader>Hotel Login</LoginFormHeader>
        <FieldWrapper>
          <InputField
            name='username'
            value={username}
            placeholder="Enter Username"
            type="text"
            onChange={handleChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <InputField
            name='password'
            value={password}
            placeholder="Enter password"
            type="password"
            onChange={handleChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <SubmitButton text="Login" disabled={!Boolean(isValidLogin)} />
        </FieldWrapper>
       <LinkToSignUp>
           <Link to="/signup"> No account? signup </Link>
       </LinkToSignUp>
      </AuthForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
`;

const FieldWrapper = styled.div`
  margin: 4px;
  margin:16px 0;
`;

const LoginFormHeader = styled.div`
  color:  #fff;
  text-align: center;
  font-size: 21px;
  background-color: #7bed9f;
  padding: 6px;
  border-radius: 3px;
`
const LinkToSignUp = styled.div`  
   text-align: right;   
   & a{
    text-decoration: none;
    color: #7bed9f;    
   }  
   
`
