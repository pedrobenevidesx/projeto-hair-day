export function hoursCLick() {
    const hours = document.querySelectorAll('.hour-available')
    

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            hours.forEach((hour) => {
                // Remove as classes hour-selected de todas as li nao selecionadas
                hour.classList.remove("hour-selected")
            })

            // Adiciona a classe da li clicada
            selected.target.classList.add("hour-selected")
        })
    })
}