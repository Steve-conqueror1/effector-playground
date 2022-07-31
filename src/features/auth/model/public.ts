import {authDomain} from "./domain";

export const setLogin  = authDomain.createEvent<{fieldName: string, value: string}>()
export const logout  = authDomain.createEvent()
export const $isAuthorised = authDomain.store<boolean>(false)

