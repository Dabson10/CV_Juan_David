
const url = "https://send-mail-java.onrender.com";

export async function startServer() {
    const despertar = await fetch(`${url}/mail/wakeup`, {
        method: 'POST'
    });
    if (despertar.ok) {
        console.log('Hola bienvenido.')
    }
}


export async function mandarCorreo(datos) {
    const respuesta = await fetch(`${url}/mail/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    const status = respuesta.status;
    const mensaje = await respuesta.json();
    if (!respuesta.ok) statusCode(status, mensaje);
    return mensaje;
}

/**
 * En base al codigo de Java se realizaran los diferentes codigos de estado con 
 * respecto a errores  ya que procesara automaticamente los que no son errores.
 * @param {*} status 
 */
function statusCode(status, mensaje) {
    //Objeto vacio.
    if (status === 400) {
        console.log(mensaje);
        throw new Error(mensaje.message);
    } else if (status === 422) {
        console.log(mensaje);
        throw new Error(mensaje.message);
    } else if (status === 202) {
        console.log(mensaje);
        throw new Error(mensaje.message)
    }
    else if (status === 500) {
        console.log(mensaje.message);
        throw new Error(mensaje.message)
    }

}

//Arreglalo perro


