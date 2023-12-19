function crearTiendas(contenedorID, min, cantidadTiendas){
    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    //ciclo para crear tantas tiendas como se soliciten
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
        //crear el texto de label para poder llamar a la función
        let textoEtiqueta = "Tienda "+conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);
        //agregar al parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin){
    //crer las etiquetas de parrafo
    let elementoParrafo = document.createElement("p");

    //crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con input
    elementoEtiqueta.setAttribute("for",textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    //establecer atributos input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo;

}
function extraerNumeroElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas = []

    ventas[0] = extraerNumeroElemento("ventasTienda1");
    ventas[1] = extraerNumeroElemento("ventasTienda2");
    ventas[2] = extraerNumeroElemento("ventasTienda3");
    ventas[3] = extraerNumeroElemento("ventasTienda4");
    ventas[4] = extraerNumeroElemento("ventasTienda5");
    ventas[5] = extraerNumeroElemento("ventasTienda6");
    ventas[6] = extraerNumeroElemento("ventasTienda7");
    ventas[7] = extraerNumeroElemento("ventasTienda8");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas +
                        "/ Venta Mayor: " + ventaMayor +
                        "/ Venta Menor: " + ventaMenor;

    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;


}

function sumarTotal(array){
    let total = 0;

    for(let venta of array){
        total = total +venta;
    }

    return total;
}

function calcularMayor(array){
    let maximo = array[0];
    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }

    return minimo;
}