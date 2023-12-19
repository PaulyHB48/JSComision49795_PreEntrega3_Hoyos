/*
Comisión 49795 JavaScript

Pre-Entrega 3

Maria Paulina Hoyos Burgos
*/

/*
Consigna:
Una empresa de transporte llamada APP SERVICIOS necesita crear una aplicación para ir capturando los servicios requeridos por los usuarios, allí presentar un listado de opciones de rutas

Una vez el usuario define: Nombre empresa, Nombre de contacto, Número de contacto, número de pasajeros, y seleccionar la ruta de una lista desplegable, se genera un reporte confirmando el agendamiento de su transporte

Se va generando para la empresa de transporte un archivo compilado con los servicios que van seleccionando para llevar control interno, en el cual se totaliza el numero de servicios, el total en dinero 

MEJORA FUTURA: Se solicitará fecha y hora y se organizará el archivo según fecha y hora del servicios.
*/

class Ruta { // Constructor de objetos
    ruta;
    descripcion;
    precio;

    constructor(ruta,descripcion,precio){
        this.ruta = ruta;
        this.descripcion = descripcion;
        this.precio = precio;

    }

}