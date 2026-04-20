import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay( {date} ) {
    try {
        // Fazendo requisicao.
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)

        // Converte para JSON.
        const data = await response.json()

        // Filtra os agendamento pelo dia selecionado
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Nao foi possivel buscar os agendamentos do dia selecionado.")
    }
}