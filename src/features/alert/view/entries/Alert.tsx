import styled from "styled-components";
import {ImCross} from "react-icons/all";
import React from "react";
import {resetAlert} from "../../model/private";
import {useStore} from "effector-react";
import {$alertType} from "../../model/public";
type Props = {
    alertMessage: string
}

export const Alert: React.FC<Props> = (props) => {
    const alertType = useStore($alertType)
    const {alertMessage} = props
    const handleClick = (e: React.MouseEvent) => {
        resetAlert()
    }

    return (
        <>
            <AlertWrapper alertType={alertType}>
                <AlertMessage>{alertMessage}</AlertMessage>
                <CloseIcon>
                    <ImCross onClick={handleClick}/>
                </CloseIcon>
            </AlertWrapper>
        </>
    )
}

const AlertWrapper = styled.div<{ alertType: string }>`
    background-color: ${({alertType}) => alertType=== 'info'? '#1e90ff' : alertType=== 'error'? '#ffa502': '#2ed573' };
    width: 400px;
    padding: 10px;
    position: fixed;
    top:0;
    right: 0;
    margin: 4px 4px;
    border-radius: 5px;
    z-index: 100;
`

const AlertMessage = styled.div`
 color: #fff;
 font-size: 21px;
`

const CloseIcon = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    transition: color .5s; 
    &:hover{
      cursor: pointer;
      color: #eee;
    }
`
