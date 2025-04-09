console.log("EJERCICIO 01")
function sumarElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}
let numeros = [1, 2, 3, 4, 5];

let resultado = sumarElementos(numeros);

console.log("La suma de los elementos del array es:", resultado);

console.log("EJERCICIO 02")
function numeroMayorYMenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    return { mayor, menor };
}let arr = [3, 7, 1, 9, 4, 5];

// Llamar a la función y mostrar el resultado
let resultado2 = numeroMayorYMenor(numeros);
console.log("Número mayor:", resultado2.mayor); 
console.log("Número menor:", resultado2.menor); 

console.log("EJERCICIO 03")
// Función para contar números pares en un arreglo
function contarNumerosPares(arreglo) {
    let cantidad = 0;
    for (let indice = 0; indice < arreglo.length; indice++) {
        if (arreglo[indice] % 2 === 0) {
            cantidad++;
        }
    }
    return cantidad;
}

// Ejemplo de arreglo
let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Llamar a la función y mostrar el resultado
let totalPares = contarNumerosPares(listaDeNumeros);
console.log("Cantidad de números pares:", totalPares);

console.log("EJERCICIO 04")
// Función para ordenar un arreglo de menor a mayor
function ordenarLista(lista) {
    for (let index = 0; index < lista.length - 1; index++) {
        for (let siguiente = 0; siguiente < lista.length - index - 1; siguiente++) {
            if (lista[siguiente] > lista[siguiente + 1]) {
                let temporal = lista[siguiente];
                lista[siguiente] = lista[siguiente + 1];
                lista[siguiente + 1] = temporal;
            }
        }
    }
    return lista;
}

// Ejemplo de arreglo
let numerosDesordenados = [9, 2, 7, 5, 3, 8, 1];

// Llamar a la función y mostrar el resultado
let listaOrdenada = ordenarLista(numerosDesordenados);
console.log("Lista ordenada:", listaOrdenada);

console.log("EJERCICIO 05")
// Función para buscar un elemento en un arreglo
function encontrarElemento(arreglo, elemento) {
    for (let indice = 0; indice < arreglo.length; indice++) {
        if (arreglo[indice] === elemento) {
            return indice;
        }
    }
    return -1;  // Retorna -1 si el elemento no se encuentra
}

// Ejemplo de arreglo de nombres
let listaDeNombres = ["Ana", "Carlos", "Luis", "Pedro", "María"];

// Llamar a la función y mostrar el resultado
let nombreBuscado = "Carlos";
let indice = encontrarElemento(listaDeNombres, nombreBuscado);

if (indice !== -1) {
    console.log(`El nombre ${nombreBuscado} se encuentra en la posición ${indice}.`);
} else {
    console.log(`El nombre ${nombreBuscado} no se encuentra en la lista.`);
}

console.log("EJERCICIO 06")
// Función para revertir un arreglo
function invertirArreglo(arregloOriginal) {
    let arregloInvertido = [];
    for (let posicion = arregloOriginal.length - 1; posicion >= 0; posicion--) {
        arregloInvertido.push(arregloOriginal[posicion]);
    }
    return arregloInvertido;
}

// Ejemplo de arreglo
let numeros1 = [1, 2, 3, 4, 5];

// Llamar a la función y mostrar el resultado
let arregloRevertido = invertirArreglo(numeros1);
console.log("Arreglo original:", numeros1);
console.log("Arreglo invertido:", arregloRevertido);



console.log("EJERCICIO 07")
// Función para convertir todos los nombres a mayúsculas
function convertirAMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
}

// Ejemplo de arreglo con nombres
let listaDeNombre = ["jeisson", "sebastian", "jeremy", "saul", "maría"];

// Llamar a la función y mostrar el resultado
let nombresEnMayusculas = convertirAMayusculas(listaDeNombre);
console.log("Nombres en mayúsculas:", nombresEnMayusculas);



console.log("EJERCICIO 08")
// Función para sumar solo los números positivos
function sumarNumerosPositivos(arrayDeNumeros) {
    let total = 0;
    for (let indice = 0; indice < arrayDeNumeros.length; indice++) {
        if (arrayDeNumeros[indice] > 0) {
            total += arrayDeNumeros[indice];
        }
    }
    return total;
}

// Ejemplo de array con números
let numerosDeEjemplo = [-5, 12, 8, -3, 7, 0];

// Llamar a la función y mostrar el resultado
let sumaDePositivos = sumarNumerosPositivos(numerosDeEjemplo);
console.log("La suma de los números positivos es:", sumaDePositivos);


console.log("EJERCICIO 09")
// Función para encontrar el primer múltiplo de 5
function encontrarPrimerMultiploDeCinco(listaNumeros) {
    return listaNumeros.find(elemento => elemento % 5 === 0);
}

// Ejemplo de array con números
let numerosDeEjemplos = [3, 7, 14, 20, 9, 28];

// Llamar a la función y mostrar el resultado
let primerMultiplo = encontrarPrimerMultiploDeCinco(numerosDeEjemplos);
console.log("El primer múltiplo de 5 es:", primerMultiplo);



console.log("EJERCICIO 10")
const readline = require('readline');

// Crear una interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para imprimir la tabla de multiplicar
function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Pedir al usuario que ingrese un número
rl.question("Ingresa un número para ver su tabla de multiplicar: ", (numeroUsuario) => {
    // Convertir el número ingresado a un entero
    let numero = parseInt(numeroUsuario);

    // Llamar a la función con el número ingresado por el usuario
    tablaDeMultiplicar(numero);

    // Cerrar la interfaz después de mostrar la tabla
    rl.close();
});

console.log("EJERCICIO 11")
function secuenciaFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
