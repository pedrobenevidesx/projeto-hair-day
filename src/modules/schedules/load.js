import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de date
const selectedDate = document.getElementById("date")

export function scheduleDays() {
    // Obtem a data do input
    const date = selectedDate.value

    // Renderiza as horas disponiveis
    hoursLoad( {date} )

}