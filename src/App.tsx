import React from 'react';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import "./App.css"
import styled from 'styled-components';
import {LoginPage} from "./pages/login/LoginPage";
import './models/init'
import {Alert} from "./features/alert/view/entries/Alert";
import {useStore} from "effector-react";
import {$alertMessage, $showAlert} from "./features/alert/model/public";
import {HomePage} from "./pages/home/entries/HomePage";


function App() {
    const showAlert = useStore($showAlert)
    const alertMessage = useStore($alertMessage)
  return (
      <BrowserRouter>
          {showAlert && <Alert alertMessage={alertMessage}/>}
        <AppWrapper>
           <Routes>
             <Route path="/login" element={<LoginPage/>} />
             <Route path="/" element={<HomePage/>} />
           </Routes>
        </AppWrapper>
      </BrowserRouter>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  height:100%;
  position: relative;
`;
