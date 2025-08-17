document.addEventListener('DOMContentLoaded', () => {
    //Este boton hara aparecer y desaparecer la sección de los datos personales
    //y la sección de proyectos.
    // Las siguientes variables son para los contenedores o botones de la seccion de la portada
    const btnAparecer = document.getElementById('btnPie')
    const svgFlecha = document.querySelectorAll('.svgAbajo')
    const contCuerpoPort = document.querySelector('.cuerpoHeader')
    const contHeader = document.getElementById('header')
    const txtCambiar = document.getElementById('textoCambio')
    //Las siguientes variables son para los contenedores de la seccion experiencia
    const contExperiencia = document.getElementById('contExp')
    let btnPresionado = false


    if (btnAparecer && svgFlecha.length > 0 && contCuerpoPort && contHeader) {

        btnAparecer.addEventListener('mouseover', () => {
            svgFlecha.forEach(svg => {
                svg.style.fill = '#eaf2f9'
                svg.style.transform = 'rotate(3.142rad)'
                svg.style.transition = 'transform 1s linear'
            })
        })
        btnAparecer.addEventListener('mouseout', () => {
            if (!btnPresionado) {
                svgFlecha.forEach(svg => {
                    svg.style.transform = 'rotate(0deg)'
                })
            }
        })
        /*Este evento sirve para varias cosas por ejemplo para agregar al SVG mediante un foreach la clase
        vuelta, para hacer rotar el svg, tambien para habilitar o desabilitar el mosueout,
        agrega a el contenedor cuerpoHeader la clase ocultar y al mismo contenedor que funciona como 
        footer lo hace pequeño para que al presionar funcione como cabecera. */
        btnAparecer.addEventListener('click', () => {
            btnPresionado = true
            svgFlecha.forEach(svg => {
                if (svg.classList.contains('vuelta')) {
                    svg.classList.remove('vuelta')
                    btnPresionado = false
                } else {
                    svg.classList.toggle('vuelta')
                }
            })
            contCuerpoPort.classList.toggle('ocultar')
            if (contHeader.classList.contains('reducir')) {
                contHeader.classList.remove('reducir')
                contExperiencia.classList.toggle('ocultar')

                txtCambiar.innerText = 'Mis proyectos'
            } else {
                contHeader.classList.toggle('reducir')
                contExperiencia.classList.remove('ocultar')

                let valor = txtCambiar.textContent
                console.log(`${valor}`)
                txtCambiar.innerText = 'Sobre mi'
            }
        })
    }
    /*Objeto de objetos para los lenguajes y proyectos
    esto servira para mostrar los proyectos en la pagina web sin la necesidad 
    de tener mucho codigo de HTML, y todo sea rapido.
     */
    const lenguajes = {
        'java':{
            titulo: "Java",
            descripcion: `Este lenguaje de programacion fue mi primer lenguae y mas preciado, 
            ya que como era algo complicado aprendi con ejercicios, por lo que poco a poco le tome cariño a este 
            lenguaje.`,
            calificacion : 3,
            proyectos: [
                {
                codeVideo: "https://www.youtube.com/embed/8iInPYD390Y?si=7Aw8h5b9kdeA8R-F",
                titulo: "Gestor de biblioteca en Java Swing.",
                descripcion: "Proyecto personal realizado en Java Swing con uso de base de datos de MySQL, este es uno de mis primeros proyectos grandes e individuales que he realizado, aqui aprendi cosas basicas como la importancia del uso de bloques try-catch, separacion de diseño y logica de negocio.",
            },
            {
                codeVideo: "https://www.youtube.com/embed/Gxj7iN8p3RU?si=gsMO0JQDwhicRq82",
                titulo: "Gestor de ventas en Java Swing.",
                descripcion: "Proyecto personal, este punto de ventas surgio de la curiosidad de como funcionan la aplicaciones de punto de venta y como se podria crear una desde cero. Este proyecto me costo demasiado mas que nada en las consultas de base de datos ya que para este momento no sabia que existian consultas como COUNT() o SUM(), por lo que al hacer recortes y agregar nuevos productos lo hacia sumando con bucles for.",
            },
            {
                codeVideo: "https://www.youtube.com/embed/NMeKqIDe5tk?si=4pRftJ5_GpuF4HXB",
                titulo: "Sistema bancario en Java Swing.",
                descripcion:"Este proyecto escolar fue algo realmente agradable realizar, ya que aprendi a saber como funcionan las operaciones bancarias, aunque fue basica sin tanta seguridad pero la logica implementada me ayudo a entender conceptos de bases de datos basicos y necesarios para este tipo de proyectos",
            }
            ]
        },
        // El siguiente es para C#
        'CSH':{
            titulo: "C#",
            descripcion: `Este lenguaje para mi fue muy fugas ya que no tuve mucho tiempo para 
            conocer sus diferencias no le agarre tanto gusto, aunque el desarrollar interfaz en este lenguaje
            se me hizo mas interactivo que con Java Swing.`,
            calificacion : 2,
            proyectos: [
                {
                codeVideo: "https://www.youtube.com/embed/lx6LCOfbFYQ?si=LyVpOi9QCdY47-ou",
                titulo: "Gestor de papeleria ysando C# y MySQL.",
                descripcion: "Proyecto escolar, utilizando C#, la primera vez que use este lenguaje en un proyecto grande, aparte de tener una base de datos amplia, ya que contaba con muchas tablas y relaciones, en este proyecto aprendi demaciado de como se relacionan las tablas y como hacer consultas correctamente.",
                calificacion: 2,
                infoLenguaje: "La verdad me gusto mucho utilizar este lenguaje deprogramacion"
            }
            ]
        },
        'mysql':{
            titulo: "MySQL",
            descripcion: `Este lenguaje de base de datos se me hizo muy agradable y simple de entender, aunque cosas como inner join se me complica, pero de ahi en fuera me gusto manejar MySQL en diferentes proyectos, la verdad lo volveria a usar.`,
            calificacion : 3,
            proyectos: [
                {
                codeVideo: "https://www.youtube.com/embed/lx6LCOfbFYQ?si=LyVpOi9QCdY47-ou",
                titulo: "Gestor de papeleria ysando C# y MySQL.",
                descripcion: "En este proyecto en especifico de la base de datos aprendi demasiadas cosas, por ejemplo saber leer y crear diagramas relacionales y entidad relacion, esto pues te da una vista clara al crear bases de datos correctamente ",
                calificacion: 2,
                infoLenguaje: "La verdad me gusto mucho utilizar este lenguaje deprogramacion"
            }
            ]
        }
    }

    // Variables para mostrar los proyectos 
    const elementoSeleccionado = document.getElementById('SelectLenguaje')
    const tarjetaExp = document.getElementById('proyectos-cont')
    const infoAlerta = document.getElementById('infoAlerta')
    const tituloLenguaje = document.getElementById('titLenguaje')
    const descLenguaje = document.getElementById('descripLenguaje')
    if(elementoSeleccionado && tarjetaExp && infoAlerta && tituloLenguaje && descLenguaje){
        //Como existen entonces procedemos al evento de cambio de seleccion
        elementoSeleccionado.addEventListener('change', (event)=>{
            // alert('dede')
            //Se obtiene el lenguaje seleccionado y se guarda en una variable
            const lenguajeSelect = event.target.value
            //Ahora se limpia el contenedor de las tarjetas sea el caso que se cambio de lenguaje
            tarjetaExp.innerHTML = ''
            const lenguajeObj = lenguajes[lenguajeSelect]
            const proyectosLenguaje = lenguajeObj.proyectos
            tituloLenguaje.innerText = ''
            descLenguaje.innerText = ''
            // tituloLenguaje.innerText = proyectosLenguaje.titulo
            // descLenguaje.innerHTML = proyectosLen
            if(!proyectosLenguaje){
                infoAlerta.innerText = `Seleccione un lenguaje para poder acceder a mis proyectos.`;
                return;
            }
            infoAlerta.innerText = ``;
            tituloLenguaje.innerText = lenguajeObj.titulo
            descLenguaje.innerText = lenguajeObj.descripcion
            proyectosLenguaje.forEach(proyecto => {
                // descLenguaje.innerText = proyecto.descripcion
                const tarjetaProyecto = document.createElement('div')
                tarjetaProyecto.classList.add('cardInfoProyect')
                tarjetaProyecto.innerHTML = `
                <div class="contVideo">
                <iframe class="videoYT" src="${proyecto.codeVideo}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                </iframe>
            </div>
            <div class="infoPrograma">
                <div class="tituloProy">${proyecto.titulo}</div>
                <div class="descripProy">
                    ${proyecto.descripcion}
                </div>
            </div>
                `;
                tarjetaExp.appendChild(tarjetaProyecto)
            })
        })
    }


})