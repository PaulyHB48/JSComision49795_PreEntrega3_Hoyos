/*
Comisión 49795 JavaScript

Pre-Entrega 1
>>Crear algoritmo con un condicional y un ciclo, armar un simulador interactivo

Maria Paulina Hoyos Burgos
*/

/*
Consigna:
Una tienda ha escogido a 5 clientes que aún no han pagado y recibirán un 15% de descuento si
compran más de 10 kilos de mangos. 
Determinar cuánto pagará cada cliente y cuanto recibirá la tienda por esas compras. 
Al final debe entregar un reporte con los clientes, las compras y el descuento.

Pasos:
1. Saludar al cliente y solicitar su nombre:
2. Solicitar a cada cliente que pase los kilos de mango comprados:
3. Dar mensaje de agradecimiento a cada cliente por su compra indicandole los kilos de mango comprados, el subtotal y si recibió el descuento del 15%.
4. Imprimir el balance de las compras de los 5 clientes.
*/

const PMANGO = 5800; // Precio Kg Mango en COP

let nombreCliente;
let kgComprados;
let subTotal;
let descuento;
let balance = `Nombre   Kg  Subtotal   Descuento \n`;
let registro;
let totalVenta = 0;

for (let i = 1; i <= 5; i++) {
    nombreCliente = prompt(`Buenos días Bienvenido a DistriMango!\n
                            Por favor registrar su nombre:`);
    kgComprados = +prompt(`Registrar los kg mango a comprar:`);
    if (kgComprados > 15){
        subTotal = kgComprados*PMANGO*0.85.toFixed(2);
        alert(`Gracias por su compra,fueron ${kgComprados}Kg por ${subTotal} COP \n
        Felicidades usted recibio el descuento del 15%`)
        totalVenta = totalVenta + subTotal;
        descuento = 'Si';
    }else{
        subTotal = kgComprados*PMANGO.toFixed(2);
        alert(`Gracias por su compra,fueron ${kgComprados}Kg por ${subTotal} COP \n
        Compra a precio full`)
        totalVenta = totalVenta + subTotal;
        descuento = 'No';
    }

    registro = `${nombreCliente}   ${kgComprados}   ${subTotal}   ${descuento} \n`;

    balance = balance + registro; 

}

balance = balance + 'Total venta para DistriMango fue de: ' + `${totalVenta} COP` ; 

alert (`Balance actividad descuentos DistriMango \n
${balance}`)