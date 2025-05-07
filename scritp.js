// Esta seccion son las variables de los botones para activar cada seccion

const btnJava = document.getElementById('btnJava')
const btnC = document.getElementById('btnC')
const btnHtml = document.getElementById('btnHtml')

// Variable de los contenedores de cada seccion
const contJava = document.getElementById("contJava")
const contC = document.getElementById("contC")
const contHtml = document.getElementById("contHtml")

// Evento del boton de Java
btnJava.addEventListener("click", () => {
    contJava.classList.toggle("active")
    contC.classList.remove('active')
    contHtml.classList.remove('active')
})

// Evento de boton de c#

btnC.addEventListener("click", () => {
    contC.classList.toggle("active")
    contJava.classList.remove("active")
    contHtml.classList.remove("active")
})

// Evento de boton de html
btnHtml.addEventListener("click", () => {
    contHtml.classList.toggle("active")
    contJava.classList.remove("active")
    contC.classList.remove("active")
})


// Estos ultimos tres botones son para cambiar el color de las listas
// para mostrar el color de cada habilidad

// VARIABLES DE LOS BOTONES
const btnBasi = document.getElementById('btnBasi')
const btnInter = document.getElementById('btnInter')
const btnEva = document.getElementById('btnEva')

// VARIABLES DE LOS CONTENEDORES 
const elementosInter = document.querySelectorAll('.opcInt'); 
const elementoBasi = document.querySelectorAll('.opcBasi');

// Funcionalida de los botones
btnBasi.addEventListener('click', () => {
    elementoBasi.forEach(elemento => { 
        elemento.classList.toggle('active');
    });
});

btnInter.addEventListener('click', () => {
    elementosInter.forEach(elemento => { 
        elemento.classList.toggle('active');
    });
});


btnInter.addEventListener('click', () => {
    contInter.classList.toggle("active")
})

