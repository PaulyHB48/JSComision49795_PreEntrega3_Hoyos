/*
Comisión 49795 JavaScript

Pre-Entrega 2

Maria Paulina Hoyos Burgos
*/

/*
Consigna:
Una empresa de transporte llamada APP SERVICIOS necesita crear una aplicación para ir capturando los servicios requeridos por los usuarios, allí presentar dos listados de opciones de rutas según el numero de usuario a transportar:
1. Entre 1 y 4 usuario: rutasDuster
2. Entre 5 y 10 usuario: 
    Opción 1: (2) Duster
    Opción 2: (1) Van

Una vez el usuario define su nombre, apellido, e-mail, celular, # usuarios, ruta, fecha y hora, se le envia un mensaje confirmando el agendamiento de su transporte

MEJORA FUTURA: Se va generando para la empresa de transporte un archivo compilado con los servicios que van seleccionando para llevar control interno, en el cual se totaliza el numero de servicios, el total en dinero y se organizar por fecha y hora del servicios.
*/

// Objetos Rutas de transporte en vehículo Duster
const rutasCamioneta = [new Rutas("MDE-JMC/JMC-MDE", "Transporte en CAMIONETA entre Medellin y el aeropuerto JMC o viceversa", 90000),
new Rutas("ENV-JMC/JMC-ENV", "Transporte en camioneta entre Envigado y el aeropuerto JMC o viceversa", 95000),
new Rutas("SAB-JMC/JMC-SAB", "Transporte en camioneta entre Sabaneta y el aeropuerto JMC o viceversa", 100000),
new Rutas("BEL-JMC/JMC-BEL", "Transporte en camioneta entre Bello y el aeropuerto JMC o viceversa", 105000),
];

// Objetos Rutas de transporte en vehículo Van
const rutasVan = [new Rutas("MDE-JMC/JMC-MDE", "Transporte en VAN entre Medellin y el aeropuerto JMC o viceversa", 200000),
new Rutas("ENV-JMC/JMC-ENV", "Transporte en Van entre Envigado y el aeropuerto JMC o viceversa", 215000),
new Rutas("SAB-JMC/JMC-SAB", "Transporte en Van entre Sabaneta y el aeropuerto JMC o viceversa", 230000),
new Rutas("BEL-JMC/JMC-BEL", "Transporte en Van entre Bello y el aeropuerto JMC o viceversa", 245000),
];

///** MEJORA FUTURA PARA LAS CLASES, AGREGAR TIPO DE VEHICULO Y SOLO GENERA UN LISTADO DE OBJETOS.

const reporteServiciosCamionetaCliente = []; //Inicialización Array para almacenar servicios solicitados por el cliente
const reporteServiciosVanCliente = []; //Inicialización Array para almacenar servicios que van solicitando por el cliente
const reporteServiciosAPP = []; //Inicialización Array para almacenar servicios que van solicitando a la empresa para llevar reporte transportes 

// Funcion para definir el tipo de lista a mostrar según el numero de usuario indicado

alert (`Bienvenidos a APP Servicios!!`);
let cliente = prompt(`Por favor indicar nombre de la empresa:`);
let email = prompt(`Por favor indicar email:`);
let celular = prompt(`Por favor indicar celular:`);

///** MEJORA FUTURA AGREGAR FECHA Y HORA PARA GENERAR ARRAY (PUSH) Y PODER CONSTRUIR UNA TABLA PARA PRESENTAR REPORTE SERVICIOS APP (FOREACH) Y ORDENAR ARRAY POR FECHA Y HORA (CON METODOS)

function seleccionVehiculo() {
    let users = +prompt(`Por favor indicar para cuantos usarios necesita su transporte:`);

    if (users >= 1 && users < 5) {

        let transporteCamioneta = `Las rutas disponibles en Camioneta son: \n`;
        rutasCamioneta.forEach((rutas, index) => {
            transporteCamioneta = transporteCamioneta +
                `(${index + 1}) - Ruta ${rutas.ruta} : ${rutas.descripcion} - Valor: ${rutas.precio} COP \n `;
        });
        let opcionCamioneta = prompt(transporteCamioneta);

        reporteServiciosCamionetaCliente.push(rutasCamioneta[opcionCamioneta - 1])

    }

    if (users >= 5 && users < 11) {

         let transporteVan = `Las rutas disponibles en Van son: \n`;
         rutasVan.forEach((rutas, index) => {
             transporteVan = transporteVan +
                 `(${index + 1}) - Ruta ${rutas.ruta} : ${rutas.descripcion} - Valor: ${rutas.precio} COP \n `;
         });
         let opcionVan = prompt(transporteVan);

         reporteServiciosVanCliente.push(rutasVan[opcionVan - 1]);
         console.log(reporteServiciosVanCliente);

    }

    while (users <1 || users >10) {
        alert = ('Opcion incorrecta, vuelva a indicar el número de usuarios: \n'
            + users);
    }


}

function cerrarSolicitud() {
    console.log(reporteServiciosCamionetaCliente);
    console.log(reporteServiciosVanCliente);

    let totalCamioneta = reporteServiciosCamionetaCliente.reduce((totalCamioneta, rutas) => { return totalCamioneta + rutas.precio }, 0);
    let totalVan = reporteServiciosVanCliente.reduce((totalVan, rutas) => { return totalVan + rutas.precio }, 0);
    let total = totalCamioneta + totalVan;
    let confirmacion;

    alert(`${cliente} Los servicios indicados tienen un valor total de: $${total}`);

    confirmacion = prompt('¿Está de acuerdo con la cotización de servicios? s/n').toLocaleLowerCase();
    if (confirmacion === 's'){
        alert (`Sus servicios han sido programados, hemos enviado un correo de confirmación al e-mail ${email} y los conductores asignados se comunicarán al número de contacto ${celular} \n
        Muchas gracias por elegirnos!!!`);

    }
}

function continuacionSolicitud() {
    let continuacion;
    do {
        seleccionVehiculo();
        continuacion = prompt('Desea pedir otro servicio? s/n').toLocaleLowerCase();
    } while (continuacion !== 'n');

}

continuacionSolicitud();
cerrarSolicitud();






