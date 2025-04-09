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

let numerosDeEjemplos = [3, 7, 14, 20, 9, 28];
// Llamar a la función y mostrar el resultado
let primerMultiplo = encontrarPrimerMultiploDeCinco(numerosDeEjemplos);
console.log("El primer múltiplo de 5 es:", primerMultiplo);


console.log("EJERCICIO 10")
// Importar readline una sola vez
const readline = require('readline');

// Crear una única interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ===== FUNCIONES DE LOS EJERCICIOS =====

// Ejercicio 10: Tabla de multiplicar
function tablaDeMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejercicio 11: Secuencia Fibonacci
function secuenciaFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Ejercicio 12: Adivinar número
function adivinarNumero(callback) {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log("Piensa en un número entre 1 y 10");
    
    function hacerPregunta() {
        rl.question("Adivina el número entre 1 y 10: ", (respuesta) => {
            const intento = parseInt(respuesta);
            
            if (intento === numeroAleatorio) {
                console.log("¡Felicidades! Adivinaste el número.");
                callback(); // Continuar con el siguiente ejercicio
            } else {
                if (intento < numeroAleatorio) {
                    console.log("El número es mayor. Intenta de nuevo.");
                } else {
                    console.log("El número es menor. Intenta de nuevo.");
                }
                hacerPregunta();
            }
        });
    }
    
    hacerPregunta();
}

// Ejercicio 13: Cuenta regresiva
function cuentaRegresiva(numeroInicio) {
    console.log("Cuenta regresiva:");
    while (numeroInicio >= 0) {
        console.log(numeroInicio);
        numeroInicio--;
    }
}

// Ejercicio 14: Validar entrada
function validarEntrada(callback) {
    function pedirNumero() {
        rl.question("Ingresa un número mayor que 0: ", (entradaUsuario) => {
            const numeroUsuario = parseInt(entradaUsuario);

            // Validar la entrada
            if (isNaN(numeroUsuario) || numeroUsuario <= 0) {
                console.log("Por favor, ingresa un número válido mayor que 0.");
                pedirNumero(); // Volver a pedir el número si es inválido
            } else {
                console.log("Número válido ingresado:", numeroUsuario);
                callback(); // Continuar con el siguiente ejercicio
            }
        });
    }

    pedirNumero();
}

// Ejercicio 15: Mostrar menú
function mostrarMenu(callback) {
    function pedirOpcion() {
        rl.question("Menú:\n1. Opción 1\n2. Opción 2\n3. Salir\nIngresa una opción: ", (entradaUsuario) => {
            const opcionUsuario = parseInt(entradaUsuario);

            switch (opcionUsuario) {
                case 1:
                    console.log("Elegiste la opción 1");
                    pedirOpcion();
                    break;
                case 2:
                    console.log("Elegiste la opción 2");
                    pedirOpcion();
                    break;
                case 3:
                    console.log("Saliendo del menú...");
                    callback(); // Continuar con el siguiente ejercicio
                    return;
                default:
                    console.log("Opción inválida");
                    pedirOpcion();
            }
        });
    }

    pedirOpcion();
}

// Ejercicio 16: Sumar impares
function sumarImpares() {
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }
    console.log("Suma de números impares del 1 al 50:", suma);
}

// Ejercicio 17: Simular login
function simularLogin(callback) {
    const contraseñaCorrecta = "1234";
    let intentosRestantes = 3;

    // Función para pedir la contraseña
    function pedirContraseña() {
        rl.question("Ingresa la contraseña: ", (entradaContraseña) => {
            if (entradaContraseña === contraseñaCorrecta) {
                console.log("Acceso concedido");
                callback(); // Continuar con el siguiente ejercicio
            } else {
                intentosRestantes--;
                if (intentosRestantes > 0) {
                    console.log(`Contraseña incorrecta. Te quedan ${intentosRestantes} intentos.`);
                    pedirContraseña(); // Volver a pedir la contraseña si es incorrecta
                } else {
                    console.log("Acceso denegado");
                    callback(); // Continuar con el siguiente ejercicio aunque se agoten los intentos
                }
            }
        });
    }

    pedirContraseña();
}

// Ejercicio 18: Sumar hasta cero
function sumarHastaCero(callback) {
    let suma = 0;

    // Función para pedir números al usuario
    function pedirNumero() {
        rl.question("Ingresa un número (0 para salir): ", (entrada) => {
            const numero = parseInt(entrada);

            // Si el número es 0, termina el ciclo y muestra la suma total
            if (numero === 0) {
                console.log("Suma total:", suma);
                callback(); // Continuar con el siguiente ejercicio
            } else {
                suma += numero; // Suma el número al total
                pedirNumero(); // Vuelve a pedir un número
            }
        });
    }

    pedirNumero(); // Llamada inicial para pedir un número
}

// Ejercicio 19: Fibonacci hasta 100
function fibonacciHasta100() {
    let fib = [0, 1];
    // Generar la secuencia de Fibonacci hasta que un número sea mayor que 100
    while (fib[fib.length - 1] <= 100) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    // Imprimir la secuencia sin el último número (que es mayor que 100)
    console.log("Serie de Fibonacci hasta 100:", fib.slice(0, -1).join(', '));
}

// Ejercicio 20: Múltiplos de 3 hasta 50
function multiplosDe3Hasta50() {
    console.log("Múltiplos de 3 menores a 50:");
    let i = 1;
    while (i * 3 < 50) {
        console.log(i * 3);  // Imprime el múltiplo de 3
        i++;  // Incrementa el contador
    }
}

// ===== EJECUCIÓN SECUENCIAL DE LOS EJERCICIOS =====

// Función para ejecutar todos los ejercicios en secuencia
function ejecutarEjercicios() {
    // Iniciar con el Ejercicio 10
    console.log("EJERCICIO 10");
    rl.question("Ingresa un número para ver su tabla de multiplicar: ", (numeroUsuario) => {
        const numero = parseInt(numeroUsuario);
        tablaDeMultiplicar(numero);
        
        // Continuar con el Ejercicio 11
        console.log("\nEJERCICIO 11");
        const cantidadNumeros = 10;
        console.log(`Los primeros ${cantidadNumeros} números de la secuencia Fibonacci son:`);
        console.log(secuenciaFibonacci(cantidadNumeros));
        
        // Continuar con el Ejercicio 12
        console.log("\nEJERCICIO 12");
        adivinarNumero(() => {
            // Continuar con el Ejercicio 13
            console.log("\nEJERCICIO 13");
            rl.question("Ingresa un número para hacer la cuenta regresiva: ", (numRegresiva) => {
                const numeroRegresiva = parseInt(numRegresiva);
                cuentaRegresiva(numeroRegresiva);
                
                // Continuar con el Ejercicio 14
                console.log("\nEJERCICIO 14");
                validarEntrada(() => {
                    // Continuar con el Ejercicio 15
                    console.log("\nEJERCICIO 15");
                    mostrarMenu(() => {
                        // Continuar con el Ejercicio 16
                        console.log("\nEJERCICIO 16");
                        sumarImpares();
                        
                        // Continuar con el Ejercicio 17
                        console.log("\nEJERCICIO 17");
                        simularLogin(() => {
                            // Continuar con el Ejercicio 18
                            console.log("\nEJERCICIO 18");
                            sumarHastaCero(() => {
                                // Continuar con el Ejercicio 19
                                console.log("\nEJERCICIO 19");
                                fibonacciHasta100();
                                
                                // Continuar con el Ejercicio 20
                                console.log("\nEJERCICIO 20");
                                multiplosDe3Hasta50();
                                
                                // Finalmente cerramos la interfaz
                                console.log("\nTodos los ejercicios han sido completados.");
                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
}

// Iniciar la ejecución de los ejercicios
ejecutarEjercicios();