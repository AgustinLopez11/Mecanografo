const entrada = document.querySelector('.entrada')
const valor = document.querySelector('.escribir')
const dis = document.querySelector('.dis')
entrada.addEventListener('keyup', () => {
    comprobacion(entrada.value)
})



const comprobacion = (valorentrada) => {
    let compt = valor.textContent
    dis.textContent = valorentrada
    if (compt.startsWith(valorentrada)) {
        //display.classList.remove("bg-danger")
        //display.classList.add("bg-success")
        if (compt.length == String(valorentrada).length) {
            alert("Terminado!!")
        }
    }
    else {
        //display.classList.remove("bg-success")
        //display.classList.add("bg-danger")
    }
}