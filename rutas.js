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

Y se va generando para la empresa de transporte un archivo compilado con los servicios que van seleccionando para llevar control interno, en el cual se totaliza el numero de servicios, el total en dinero y se organizar por fecha y hora del servicios.
*/

class Rutas { // Constructora de objetos
    ruta;
    descripcion;
    precio;

    constructor(ruta,descripcion,precio){
        this.ruta = ruta;
        this.descripcion = descripcion;
        this.precio = precio;

    }

}