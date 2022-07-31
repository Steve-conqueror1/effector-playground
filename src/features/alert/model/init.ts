import {$alertMessage, $alertType, $showAlert, setAlertMessage, setAlertType, showAlert} from "./public";
import {resetAlert} from "./private";
import {forward} from "effector";

$showAlert
    .on(showAlert, ()=> true)
    .reset(resetAlert)

$alertMessage
    .on(setAlertMessage, (_, message) => message)
    .reset(resetAlert)


$alertType
    .on(setAlertType, (_, value) => value)
    .reset(resetAlert)

forward({
   from: setAlertMessage,
   to: showAlert
})
