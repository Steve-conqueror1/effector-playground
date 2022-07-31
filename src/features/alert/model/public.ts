import {alertDomain} from "./domain";

export const $showAlert = alertDomain.store<boolean>(false)
export const showAlert = alertDomain.event()
export const setAlertMessage = alertDomain.event<string>()
export const $alertMessage = alertDomain.store('')
export const $alertType = alertDomain.store<string>('info')
export const setAlertType = alertDomain.event<string>()
