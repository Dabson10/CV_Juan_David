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

    if (btnAparecer && svgFlecha.length > 0 && contCuerpoPort && contExperiencia ) {

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
        'java': {
            titulo: "Java",
            descripcion: `Este lenguaje de programacion fue mi primer lenguae y mas preciado, 
            ya que como era algo complicado aprendi con ejercicios, por lo que poco a poco le tome cariño a este 
            lenguaje.`,
            calificacion: 3,
            proyectos: [
                {
                    anchoV: 300,
                    altoV: 208,
                    codeVideo: "https://www.youtube.com/embed/8iInPYD390Y?si=7Aw8h5b9kdeA8R-F",
                    titulo: "Gestor de biblioteca en Java Swing.",
                    descripcion: "Proyecto personal realizado en Java Swing con uso de base de datos de MySQL, este es uno de mis primeros proyectos grandes e individuales que he realizado, aqui aprendi cosas basicas como la importancia del uso de bloques try-catch, separacion de diseño y logica de negocio.",
                    link: "#",
                    descWeb: "",
                },
                {
                    anchoV: 300,
                    altoV: 208,
                    codeVideo: "https://www.youtube.com/embed/Gxj7iN8p3RU?si=gsMO0JQDwhicRq82",
                    titulo: "Gestor de ventas en Java Swing.",
                    descripcion: "Proyecto personal, este punto de ventas surgio de la curiosidad de como funcionan la aplicaciones de punto de venta y como se podria crear una desde cero. Este proyecto me costo demasiado mas que nada en las consultas de base de datos ya que para este momento no sabia que existian consultas como COUNT() o SUM(), por lo que al hacer recortes y agregar nuevos productos lo hacia sumando con bucles for.",
                    link: "#",
                    descWeb: "",
                },
                {
                    anchoV: 300,
                    altoV: 208,
                    codeVideo: "https://www.youtube.com/embed/NMeKqIDe5tk?si=4pRftJ5_GpuF4HXB",
                    titulo: "Sistema bancario en Java Swing.",
                    descripcion: "Este proyecto escolar fue algo realmente agradable realizar, ya que aprendi a saber como funcionan las operaciones bancarias, aunque fue basica sin tanta seguridad pero la logica implementada me ayudo a entender conceptos de bases de datos basicos y necesarios para este tipo de proyectos",
                    link: "#",
                    descWeb: "",
                }
            ]
        },
        // El siguiente es para C#
        'CSH': {
            titulo: "C#",
            descripcion: `Este lenguaje para mi fue muy fugas ya que no tuve mucho tiempo para 
            conocer sus diferencias no le agarre tanto gusto, aunque el desarrollar interfaz en este lenguaje
            se me hizo mas interactivo que con Java Swing.`,
            calificacion: 2,
            proyectos: [
                {
                    anchoV: 300,
                    altoV: 208,
                    codeVideo: "https://www.youtube.com/embed/lx6LCOfbFYQ?si=LyVpOi9QCdY47-ou",
                    titulo: "Gestor de papeleria ysando C# y MySQL.",
                    descripcion: "Proyecto escolar, utilizando C#, la primera vez que use este lenguaje en un proyecto grande, aparte de tener una base de datos amplia, ya que contaba con muchas tablas y relaciones, en este proyecto aprendi demaciado de como se relacionan las tablas y como hacer consultas correctamente.",
                    link: "#",
                    descWeb: "",
                }
            ]
        },
        // El siguiente es para proyectos con bases de datos.
        'mysql': {
            titulo: "MySQL",
            descripcion: `Este lenguaje de base de datos se me hizo muy agradable y simple de entender, aunque cosas como inner join se me complica, pero de ahi en fuera me gusto manejar MySQL en diferentes proyectos, la verdad lo volveria a usar.`,
            calificacion: 3,
            proyectos: [
                {
                    anchoV: 300,
                    altoV: 208,
                    codeVideo: "https://www.youtube.com/embed/lx6LCOfbFYQ?si=LyVpOi9QCdY47-ou",
                    titulo: "Gestor de papeleria ysando C# y MySQL.",
                    descripcion: "En este proyecto en especifico de la base de datos aprendi demasiadas cosas, por ejemplo saber leer y crear diagramas relacionales y entidad relacion, esto pues te da una vista clara al crear bases de datos correctamente, aparte a esto aprendi la necesidad de no eliminar datos mas bien actualizarlos o vaciarlos, esto para tener datos persistentes al relacionar tablas.",
                    link: "#",
                    descWeb: "",
                },
                {
                    anchoV: 300,
                    altoV: 208,
                    codeVideo: "https://www.youtube.com/embed/8iInPYD390Y?si=7Aw8h5b9kdeA8R-F",
                    titulo: "Gestor de biblioteca en Java Swing.",
                    descripcion: "Este proyecto fue el primero en el que utilice una base de datos relacional, por lo que este proyecto utiliza tablas no relacionadas ya que no sabia usarlas, con este proyecto aprendi la importancia del uso de base de datos en proyectos reales.",
                    link: "#",
                    descWeb: "",
                },
                {
                    anchoV: 300,
                    altoV: 208,
                    codeVideo: "https://www.youtube.com/embed/Gxj7iN8p3RU?si=gsMO0JQDwhicRq82",
                    titulo: "Gestor de ventas en Java Swing.",
                    descripcion: "Este proyecto escolar me gusto hacerlo ya que ahora si relacione tablas y pense mejor en como estructurarlas. Aunque para este momento no conocia aun ciertas funcionalidades del propio lenguaje de MySQL como COUNT(), SUM(). Esto era necesario para contar la cantidad de productos, sumar las ventas, aunque en este proyecto use logica del propio Java",
                    link: "#",
                    descWeb: "",
                },
                {
                    anchoV: 300,
                    altoV: 208,
                    codeVideo: "https://www.youtube.com/embed/NMeKqIDe5tk?si=4pRftJ5_GpuF4HXB",
                    titulo: "Sistema bancario en Java Swing.",
                    descripcion: "Este sistema bancario me mantuve en un conocimiento normal, el uso de CRUD fue normal, aunque la manera de insertar datos en forma de depositos, transferencias, retiros si es una manera explicita de entender la funcionalidad de las bases de datos.",
                    link: "#",
                    descWeb: "",
                }
            ]
        },
        // El siguiente es para los proyectos de paginas web
        'html-css': {
            titulo: "HTML, CSS Y JS",
            descripcion: `Este conjunto de lenguajes tanto de etiquetado, de diseño como de logica, fueron los que hicieron que me gustara la programación y que me decidiera a estudiar 'sistemas computacionales'.`,
            calificacion: 2,
            proyectos: [
                {
                    anchoV: 0,
                    altoV: 0,
                    codeVideo: "",
                    titulo: "Clon de UTC web",
                    descripcion: "Proyecto escolar en donde se me solicito clonar la pagina web de la universidad en donde estudio que es Universidad Tres Culturas, en este proyecto aprendi realmente como funciona el flexbox y a ajustar correctamente contenedores, aunqu aun estoy aprendiendo, realmente me siento seguro con el conocimiento que aprendi de este proyecto.<br> Puedes revisar el sitio web en el siguiente link.",
                    link: "https://clon-utc.netlify.app/",
                    descWeb: "Clon-UTC"
                },
                {
                    anchoV: 0,
                    altoV: 0,
                    codeVideo: "",
                    titulo: "Equipo pokemon",
                    descripcion: "Proyecto escolar en donde se me pidio realizar una app movil a libre gusto y en equipo, en este proyecto yo me encargue de la realizacion de las transiciones o animaciones de las pantallas, por ejemplo en la elección del personaje y el panel de equipo.  <br> En este proyecto aprendi a hacer transiciones y a manejar diferentes vistas en una misma pagina web, aumentando mis conocimientos de basicos a intermedios.",
                    link: "https://equipo-pokemonbw.netlify.app/",
                    descWeb: "equipo-pokemon"
                },
                {
                    anchoV: 0,
                    altoV: 0,
                    codeVideo: "",
                    titulo: "Rhema.Logos",
                    descripcion: "Este sitio web es dedicado a dar a conocer una pagina de Instagram en la cual se habla de estudios biblicos, aparte de redirigir a las diferentes redes sociales, tambien sirve para descargar contenido en PDF de diferentes estudios realizados acerca de la biblia. <br> Al realizar este sitio web el enfoque fue muy claro, primero movil, enseñandome a hacer paginas web faciles y reduciendo el codigo de media queries. realmente aprendi a usar media-queries y posiciones.",
                    link: "https://rhema-logos.netlify.app/",
                    descWeb: "Rhema.Logos"
                },
                {
                    anchoV: 0,
                    altoV: 0,
                    codeVideo: "",
                    titulo: "Ciberacoso en mexico",
                    descripcion: "Este proyecto escolar me gusto mucho ahcerlo, ya que pues aprendi acerca del ciberacoso y este proyecto fue un tipo concurso entre compañeros de la escuela y el haber sido el que hizo mayor parte del sitio web vi que era una necesidad utilizar media queries en cualquier sitio web, para que este sea responsive. No gane el concurso ya que pues se fueron por un diseño mas simple y menos vistoso.",
                    link: "https://ciberacoso.netlify.app/",
                    descWeb: "Ciberacoso en mexico"
                }
            ]
        },
        //El siguiente bloque es para los proyectos de python
        'python': {
            titulo: "Python",
            descripcion: `Este lenguaje de programación no le agarre tanto gusto a pesar de que lo utilice demaciadas veces en trabajos escolares, esto por que me habia acostumbrado tanto a lenguajes como java o c#.`,
            calificacion: 2,
            proyectos: [
                {
                    anchoV: 0,
                    altoV: 0,
                    codeVideo: "",
                    titulo: "Ruta de aprendizaje",
                    descripcion: "En este lenguaje no realice proyectos grandes, pero autonomamente realice una ruta de aprendizaje de python, dejare un repositorio con las diferentes practicas de aprendizaje que hice.",
                    link: "https://github.com/Dabson10/Ruta_Aprendizaje_Py",
                    descWeb: "Ruta de aprendizaje",
                }
            ]
        },
        //Kotlin
        'kotlin': {
            titulo: "Kotlin",
            descripcion: `Este lenguaje lo estudie por curiosidad y me gusto bastante tanto que hice la mi tesis en un proyecto usando kotlin.`,
            calificacion: 3,
            proyectos: [
                {
                    anchoV: 0,
                    altoV: 0,
                    codeVideo: "",
                    titulo: "Gestor de comandas para ",
                    descripcion: "Este proyecto fue realizado para mi tesis universitaria, busca administrar las ventas y comandas de un restaurante, viendo el estado de los pedidos, se pueden cambiar y ver el estado tanto para meseros como para chef, cuenta con lecutura por voz y conexion a base de datos en supabase. <br> Este proyecto es el resultado de muchas horas de estudio y dedicación, en este proyecto se podria decir que deje todos mis conocimientos tanto en programación(logica) como en el desarrollo de la base de datos, si esta tiene ciertos puntos de mejora pero fue estructurada con total claridad en su funcionamiento. <br> aun no cuenta con video ya que aun se esta produciendo, tambien tendra un sitio web para poder ver el funcionamiento de esta.",
                    link: "",
                    descWeb: "",
                }
            ]
        },
    }

    // Variables para mostrar los proyectos 
    const elementoSeleccionado = document.getElementById('SelectLenguaje')
    const tarjetaExp = document.getElementById('proyectos-cont')
    const infoAlerta = document.getElementById('infoAlerta')
    const tituloLenguaje = document.getElementById('titLenguaje')
    const descLenguaje = document.getElementById('descripLenguaje')
    if (elementoSeleccionado && tarjetaExp && infoAlerta && tituloLenguaje && descLenguaje) {
        //Como existen entonces procedemos al evento de cambio de seleccion
        elementoSeleccionado.addEventListener('change', (event) => {
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
            if (!proyectosLenguaje) {
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
                <iframe width="${proyecto.anchoV}" height="${proyecto.altoV}" class="videoYT" src="${proyecto.codeVideo}" 
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
                    <br>
                    <a href="${proyecto.link}" class="linkWeb" target="_blank">${proyecto.descWeb}</a>
                </div>
            </div>
                `;
                tarjetaExp.appendChild(tarjetaProyecto)
            })
        })
    }


})