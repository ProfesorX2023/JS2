

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