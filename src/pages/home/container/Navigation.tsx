import styled from "styled-components";
import {Button} from "../../../ui/Button";
import {useStore} from "effector-react";
import {$isAuthorised, logout} from "../../../features/auth/model/public";
import {useNavigate} from "react-router-dom"

export const Navigation = () => {
    const navigate = useNavigate()

    const isAuthorized = useStore($isAuthorised)

    return (
        <>
            <NavigationWrapper>
              <ProfileWrapper>
                  {isAuthorized ? <ProfileText>Welcome somebody</ProfileText>: <Button onClick={() => navigate('/login')}>Login</Button>}
                  {isAuthorized ? <Button onClick={() => logout()}>Logout</Button>: <Button onClick={() => navigate('/signup')}>Signup</Button>}
              </ProfileWrapper>
            </NavigationWrapper>
        </>
    )
}

const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  margin:0 10px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(255, 165, 2, .8);
`

const ProfileWrapper = styled.div`
display: flex;
justify-content: center;
 padding: 10px 0px;
`

const ProfileText = styled.div`
  align-self: center;
  color: #fff;
`
