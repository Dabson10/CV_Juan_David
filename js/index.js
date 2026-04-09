document.addEventListener('DOMContentLoaded', () => {
    // Inicialización del Tema
    const currentTheme = localStorage.getItem('theme');
    const contCambio = document.getElementById('cont-cambio');
    const temaTxt = document.getElementById('tema-text');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        contCambio.classList.add('cambio');
        temaTxt.textContent = 'MODO OSCURO';
    } else {
        temaTxt.textContent = 'MODO CLARO';
    }

    // Inicialización de Contenido
    maquetar('java');
    cambioTema();
    cambiarTec();
});

function cambioTema() {
    const btnCambio = document.getElementById('btn-cambio');
    const contCambio = document.getElementById('cont-cambio');
    const temaTxt = document.getElementById('tema-text');

    btnCambio.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        contCambio.classList.toggle('cambio');

        if (isDark) {
            temaTxt.textContent = 'MODO OSCURO';
            localStorage.setItem('theme', 'dark');
        } else {
            temaTxt.textContent = 'MODO CLARO';
            localStorage.setItem('theme', 'light');
        }
    });
}

const tecnologias = {
    "java": {
        nombre: "JAVA >|< BACKEND",
        descripcion: "Sólida base en Java SE, enfocado en el desarrollo de aplicaciones robustas con interfaces Swing y gestión de datos relacionales en MySQL.",
        calificacion: 7,
        proyecto: [
            {
                titulo: "GESTIÓN DE TAREAS (TODO LIST) | SPRING BOOT",
                descripcion: "Aplicación completa de gestión de tareas con persistencia en la nube mediante Supabase, utilizando JPA para un manejo eficiente de la base de datos.",
                video: "./image/to-do.png",
                link: "https://to-do-dabson.netlify.app/",
                linkText: "VISITAR SITIO..."
            },
            {
                titulo: "ADMINISTRADOR BIBLIOTECARIO",
                descripcion: "Sistema integral para bibliotecas con control de inventarios, préstamos y arquitectura modular para mayor escalabilidad.",
                video: "8iInPYD390Y",
                link: "https://www.youtube.com/watch?v=8iInPYD390Y",
                linkText: "VER DEMOSTRACIÓN"
            },
            {
                titulo: "SISTEMA DE PUNTO DE VENTA",
                descripcion: "Software optimizado para la gestión de ventas locales, implementando consultas SQL avanzadas para reportes en tiempo real.",
                video: "Gxj7iN8p3RU",
                link: "https://www.youtube.com/watch?v=Gxj7iN8p3RU",
                linkText: "VER DEMOSTRACIÓN"
            },
            {
                titulo: "SIMULADOR BANCARIO",
                descripcion: "Plataforma de lógica financiera con enfoque en la integridad de las transacciones y validación estricta de datos bancarios.",
                video: "NMeKqIDe5tk",
                link: "https://www.youtube.com/watch?v=NMeKqIDe5tk",
                linkText: "VER DEMOSTRACIÓN"
            }
        ]
    },
    "jpa": {
        nombre: "PERSISTENCIA >|< ORM",
        descripcion: "Especialización en el uso de JPA y Hibernate para la comunicación entre el código y la base de datos, garantizando seguridad y limpieza.",
        calificacion: 5,
        proyecto: [
            {
                titulo: "TO-DO LIST | PERSISTENCIA ",
                descripcion: "Implementación de mapeo objeto-relacional (ORM) para simplificar consultas complejas y prevenir vulnerabilidades.",
                video: "./image/to-do.png",
                link: "https://github.com/Dabson10/To-Do-list-",
                linkText: "VER CÓDIGO"
            }
        ]
    },
    "web": {
        nombre: "WEB >|< FRONTEND",
        descripcion: "Creación de interfaces de usuario modernas, interactivas y totalmente adaptables a dispositivos móviles siguiendo estándares de UX/UI.",
        calificacion: 6,
        proyecto: [
            {
                titulo: "To-Do List WEB",
                descripcion: "Aplicacion funcional para la gestion de tareas diarias, adaptada totalmente al entorno desktop y mobil.",
                video: "./image/to-do.png",
                link: "https://clon-utc.netlify.app/",
                linkText: "VISITAR SITIO"
            },
            {
                titulo: "PORTAL UNIVERSITARIO (CLON UTC)",
                descripcion: "Replicación profesional de un sitio educativo, priorizando la accesibilidad y el diseño responsivo multidispositivo.",
                video: "./image/clon-utc.png",
                link: "https://clon-utc.netlify.app/",
                linkText: "VISITAR SITIO"
            },
            // {
            //     titulo: "ORGANIZADOR DE EQUIPOS POKÉMON",
            //     descripcion: "Aplicación interactiva que demuestra el manejo dinámico de estados y animaciones en el navegador.",
            //     video: "./image/equipo-pokemon.png",
            //     link: "https://equipo-pokemonbw.netlify.app/",
            //     linkText: "VISITAR SITIO"
            // },
            {
                titulo: "PLATAFORMA RHEMA.LOGOS",
                descripcion: "Sitio web enfocado en la distribución de contenido optimizado, diseñado bajo la filosofía 'Mobile First'.",
                video: "./image/rhema-logos.png",
                link: "https://rhema-logos.netlify.app/",
                linkText: "VISITAR SITIO"
            }
        ]
    },
    "csharp": {
        nombre: "C#",
        descripcion: "Desarrollo de herramientas de escritorio funcionales y enfocadas en la productividad del usuario final.",
        calificacion: 4,
        proyecto: [
            {
                titulo: "GESTOR ADMINISTRATIVO",
                descripcion: "Aplicación para la administración de insumos y ventas mediante modelos relacionales.",
                video: "lx6LCOfbFYQ",
                link: "https://www.youtube.com/watch?v=lx6LCOfbFYQ",
                linkText: "VER VIDEO"
            }
        ]
    },
    "mysql": {
        nombre: "MYSQL >|< BASES DE DATOS",
        descripcion: "Diseño y normalización de bases de datos relacionales, garantizando la integridad y rapidez en el acceso a la información.",
        calificacion: 6,
        proyecto: [
            {
                titulo: "DISEÑO DE ESQUEMA RELACIONAL",
                descripcion: "Estructuración de datos compleja para sistemas de gestión, utilizando diagramas entidad-relación profesionales.",
                video: "lx6LCOfbFYQ",
                link: "https://www.youtube.com/watch?v=lx6LCOfbFYQ",
                linkText: "VER DETALLES"
            }
        ]
    },
    "python": {
        nombre: "PYTHON >|< LÓGICA",
        descripcion: "Creación de scripts para automatización y resolución de problemas algorítmicos mediante código limpio y eficiente.",
        calificacion: 4,
        proyecto: [
            {
                titulo: "COLECCIÓN DE PRÁCTICAS ALGORTÍMICAS",
                descripcion: "Repositorio personal que abarca desde fundamentos de programación hasta estructuras de datos en Python.",
                video: "",
                link: "https://github.com/Dabson10/Ruta_Aprendizaje_Py",
                linkText: "VER REPOSITORIO"
            }
        ]
    },
    "kotlin": {
        nombre: "KOTLIN >|< ANDROID",
        descripcion: "Desarrollo de aplicaciones móviles modernas, integrando nuevas tecnologías para soluciones inteligentes y portátiles.",
        calificacion: 5,
        proyecto: [
            {
                titulo: "GESTOR DE COMANDAS MÓVIL",
                descripcion: "Proyecto de tesis que integra reconocimiento de voz y sincronización en tiempo real para el sector restaurantero.",
                video: "",
                link: "#",
                linkText: "PRÓXIMAMENTE"
            }
        ]
    }
};

function cambiarTec() {
    const btnsTemas = document.querySelectorAll('.btn-temas');
    btnsTemas.forEach(btn => {
        btn.addEventListener('click', () => {
            btnsTemas.forEach(btn => btn.classList.remove('activo'));
            btn.classList.add('activo');
            let btnData = btn.dataset.tecnologia;
            maquetar(btnData);
        });
    });
}

function maquetar(data) {
    const dato = tecnologias[data];
    if (!dato) return;

    const titulo = document.getElementById('titulo');
    const descripcion = document.getElementById('descripcion')
    const cali = document.getElementById('calificacion');

    titulo.innerText = dato.nombre;
    descripcion.textContent = dato.descripcion;
    cali.innerText = experiencia(dato.calificacion)

    const contenedorPrincipal = document.getElementById('proyect-cont');
    contenedorPrincipal.innerHTML = '';
    dato.proyecto.forEach(datos => {
        const tarjeta = document.createElement('div')
        tarjeta.className = 'card';

        let mediaHTML = '';
        if (datos.video.includes('.png')) {
            mediaHTML = `
                <div class="cont-image">
                    <img class="img-proyect" src="${datos.video}" alt="${datos.titulo}">
                </div>`;
        } else if (datos.video.trim() !== "") {
            mediaHTML = `
                <div class="cont-vide">
                    <iframe class="videoYT" src="https://www.youtube.com/embed/${datos.video}" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                </div>`;
        }

        // Logic to only show media container if it exists
        tarjeta.innerHTML = `
            ${mediaHTML}
            <div class="cont-infoProyect">
                <h3>${datos.titulo}</h3>
                <p class="text-p">${datos.descripcion}</p>
                <a href="${datos.link}" target="_blank" class="btn-dirigir">${datos.linkText}</a>
            </div>
        `;

        contenedorPrincipal.appendChild(tarjeta);
    });
}

function experiencia(calificacion) {
    let rango = "";
    for (let i = 0; i < 10; i++) {
        if (i < calificacion) {
            rango += "=";
        } else {
            rango += "/";
        }
    }
    return `[${rango}] ${calificacion} de 10`;
}