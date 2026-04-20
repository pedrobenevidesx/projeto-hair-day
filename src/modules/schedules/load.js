import { scheduleFetchByDay } from "../../services/schedule-fetch.-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "./show.js"

// Seleciona o input de date
const selectedDate = document.getElementById("date")

export async function scheduleDays() {
    // Obtem a data do input
    const date = selectedDate.value


    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    // Exibe os agendamentos
    schedulesShow( { dailySchedules } )

    // Renderiza as horas disponiveis
    hoursLoad( {date} )

}