import {authDomain} from "./domain";

export const login  = authDomain.createEvent()

export const setIsAuthorized = authDomain.event<boolean>()

export const $authData = authDomain.store<{username: string, password: string}>({username: '', password: ''})
export const loginFx = authDomain.effect<{username: string, password: string}, void, Error>()

export const $isValidLogin = $authData.map(({username, password}) => Boolean(username) && Boolean(password))


login.watch(() => console.log("logging in.................."))
