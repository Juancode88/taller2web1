const numeros = [5, 8, 12, 15, 2, 4, 18, 21];
console.log(numeros);

/* Multiplicando cada número por el 2*/
const multiplicados = numeros.map(numero => numero * 2);
console.log(multiplicados);

/* Filtración de los números que sean mayores a 10*/
const filtrados = multiplicados.filter(numero => numero > 10);
console.log(filtrados);

/* Generación de suma con todos los números filtrados*/
const suma = filtrados.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma);   