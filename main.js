const criarVinhos = (evento) => {
    
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const rotulo = document.createElement('li')
         rotulo.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>` 
    
    rotulo.innerHTML = conteudo

    rotulo.appendChild(BotaoRejeitado())
    rotulo.appendChild(BotaoDeleta())
    lista.appendChild(rotulo)
    input.value = " "

}

const rotulo = document.querySelector('[data-form-button]')

        rotulo.addEventListener('click', criarVinhos)

const BotaoRejeitado = () => {
        const botaoRejeitado = document.createElement('button')
       
        botaoRejeitado.classList.add('check-button')
        botaoRejeitado.innerText = 'Não Curti' 
        botaoRejeitado.addEventListener('click', vinhoRejeitado)

        return botaoRejeitado
}
const vinhoRejeitado = (evento) => {

        const botaoRejeitado = evento.target 

        const tarefaCompleta = botaoRejeitado.parentElement

        tarefaCompleta.classList.toggle('done')

}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta;

}