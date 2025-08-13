const entrada = document.querySelector('.entrada');
const valor = document.querySelector('.escribir');
const display = document.querySelector('.dis');
const esc = document.querySelector('.esc');
const pensamiento2 = document.querySelector('.pensamiento2')
const pensamiento = document.querySelector('.pensamiento')
const flash = document.querySelector('.flash')
const errores = document.querySelector('.errores')
const sobre = document.querySelector('.sobre')
const tiempo = document.querySelector('.tiempo')
let oracion = "";
let oracionLista = "";
let palabra = "";
let contador = 0;
entrada.disabled = true
let cronometro;
let segundos = 0;
let minutos = 0;
let isentrar = false

let motivaciones = [
    `Tu puedes`,
    `Al principio es difícil`,
    `No te desanimes`
]

let oraciones = [
    `Empezemos con algo pequeño.`,

    `Hoy es un lindo día para hacer amistades,
     aveces tenemos que guiarnos por nuestra
     experiencias pasadas.`,

    `La habilidad de escribir con rapidez 
    y precisión en un teclado es fundamental
     en la era digital, ya que permite ahorrar 
     tiempo, mejorar la productividad y facilitar 
     la comunicación en distintos ámbitos personales
      y profesionales, como el trabajo, el estudio o
       el entretenimiento.`,

    `Aunque al principio pueda parecer difícil 
    alcanzar una velocidad alta al escribir, con 
    práctica diaria, dedicación y el uso de ejercicios 
    adecuados, es posible desarrollar una técnica eficiente
     que permita escribir sin mirar el teclado,
      reduciendo errores y aumentando la fluidez.`,
    `Muchas personas subestiman la importancia de la mecanografía, 
    pero dominar esta habilidad puede marcar una gran 
    diferencia, especialmente en profesiones que 
    requieren redactar informes, responder correos 
    electrónicos o tomar notas de manera rápida y clara.`,

    `Al practicar mecanografía es recomendable mantener una 
    postura adecuada, con la espalda recta, los codos en
     ángulo recto y los pies apoyados en el suelo, así como 
     usar todos los dedos y mantener la vista en la pantalla, 
     en lugar de mirar el teclado constantemente.`,

    `Existen diversas plataformas y aplicaciones que
      ayudan a mejorar la mecanografía mediante
       ejercicios personalizados, juegos interactivos y
        retos progresivos que motivan al usuario a
         continuar aprendiendo y perfeccionando su técnica
        día tras día.`
]
const empezar = () => {

    oracion = oraciones[Math.floor(Math.random() * 4)].trim() + " "
    for (let i = 0; i <= oracion.length; i++) {
        palabra += oracion.charAt(i)
        if (oracion.charAt(i) == " ") {
            palabra = palabra.trim()
            if (palabra != "") {
                oracionLista += palabra + " "
            }
            palabra = ""
        }
    }
    esc.style = "display:none;"
    valor.textContent = oracionLista.trim()
    oracionLista = ""
    entrada.value = ""
    display.textContent = ""
    entrada.disabled = false
    flash.style = "animation: rapido linear infinite 0.5s alternate;"
    valor.style = "display: block;"
    sobre.style = "display: block;"
    errores.textContent = 0;
    contador = 0
    tiempo.textContent = 0
    isentrar = true
    clearInterval(cronometro)
}

entrada.addEventListener('keyup', () => {
    comprobacion(entrada.value)
})

const comprobacion = (valorentrada) => {
    if (display.textContent.length == 0) {
        cronometro = setInterval(() => {
            tiempo.textContent = `00:${minutos}:${segundos++}`
            if (segundos == 60) {
                segundos = 0
                minutos++

            }

        }, 100)
    }
    let compt = valor.textContent
    display.textContent = valorentrada
    if (compt.startsWith(valorentrada)) {
        pensamiento2.textContent = "Genial!"
        display.classList.remove("colorrojo")
        display.classList.add("colorverde")
        if (display.textContent != "" && compt != "" && compt.length == String(valorentrada).length) {
            if (isentrar) {
                clearInterval(cronometro)
                setTimeout(() => {
                    alert("Felicidades has terminado una lección!!")
                }, 200)
                isentrar = false
                segundos = 0
                minutos = 0
            }
        }

    }
    else {
        contador++
        errores.textContent = contador
        pensamiento.style = "display:block;"
        pensamiento2.textContent = motivaciones[Math.floor(Math.random() * 3)]
        display.classList.remove("colorverde")
        display.classList.add("colorrojo")
    }
}

document.addEventListener('keyup', (event) => {
    event.key == "Escape" ? empezar() : ""
})

