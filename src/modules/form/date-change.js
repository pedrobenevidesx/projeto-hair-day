import {scheduleDays} from "../schedules/load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horarios quandop o input de data mudar.
selectedDate.onchange = () => scheduleDays()