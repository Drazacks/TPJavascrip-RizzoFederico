//----------Actividad 1: condiconal----------//

let hora = parseInt(prompt("Ingrese la hora en formato 00:00"));

if (hora >= 0 && hora < 12) {
    alert("Buenos días");
} else if (hora >= 12 && hora < 18) {
    alert("Buenas tardes");
} else {
    alert("Buenas noches");
}

/*Con este condicional quice que la consola muestre
un mensaje de "buenos dias, tardes, noches", según el
horario ingresado */


//----------Actividad 2: ciclo usando un while----------//

alert("Bienvenidos! Esta es una calculadora del impuesto del IVA en Argentina.")
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let total = 0;
let continuar = true;

while (continuar) {
    let cantidad = parseFloat(prompt("Por favor ingrese el monto a calcular (ingrese el 0 para salir y/o ver la suma de los montos acummulados):"));

    if (cantidad === 0) {  //esta linea indica que si ingresamos "0" como monto inicial la appi se cerrara y  monstrara lo
                           //acumulado hasta el momento
        continuar = false;
    } else if (cantidad < 0) {
        alert("Ingrese un número válido mayor a cero"); //si se ingresa un numero menor a "0" saldra la alerta
    } else {
        let impuesto = cantidad * 0.21; //en la argentina el IVA es del 21%
        let totalConImpuesto = cantidad + impuesto;

        alert(`Monto ingresado en pesos ARS: $${cantidad}`); //monto inicial
        alert(`Impuesto del IVA ARS (21%): $${impuesto}`);   //monto del calculo del iva
        alert(`Monto más impuesto: $${totalConImpuesto}`);   //calculo del iva del primer monto

        total += totalConImpuesto;
    }
}

alert(`Calculo total de la suma de todos los montos con el iva: ${total}`); //esta linea de código sirve para cuando el
                                                                            //usuario digite el "0" (cero) aparezca la suma 
                                                                            //de los montos calculados o para cerrar la calculadora.






