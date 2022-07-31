import {$authData, login, loginFx, setIsAuthorized} from "./private";
import {forward, sample} from "effector";
import {$isAuthorised, logout, setLogin} from "./public";
import {REACT_API_SERVER} from "../../../utils";
import {setAlertMessage, setAlertType} from "../../alert/model/public";


$authData
    .on(setLogin, (initialData, {fieldName, value}) => ({...initialData, [fieldName]: value}) )
    .reset(loginFx.done)

$isAuthorised
    .on(setIsAuthorized, (_, isAuthorized) => isAuthorized)
    .reset(logout)

loginFx.use(async (data) =>{
    const res = await fetch(`${REACT_API_SERVER}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
     return res.json()
})



sample({
    source: $authData,
    clock: login,
    filter: ({username, password}) => Boolean(username) && Boolean(password),
    target: loginFx
})

sample({
    source: loginFx.done,
    fn: () => 'successfully logged in',
    target: setAlertMessage
})

sample({
    source: loginFx.done,
    fn: () => 'success',
    target: setAlertType
})

sample({
    source: loginFx.done,
    fn: () => true,
    target: setIsAuthorized
})

