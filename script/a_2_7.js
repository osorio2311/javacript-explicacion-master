/**
 * Actividad propuesta 2.7
 * 
 */

let operando1=9;
let operando2=5;
let resultado=9%5;
console.log("Devuelve el resto de la división entera:"+resultado);

operando2= ++operando1;
console.log(`preincrementa (++operando1): incrementa el valor de operando1 en 1 y devuelve su contenido:`+operando2);

operando2= operando1++;
console.log(`posincremento (operando1++) devuelve su contenido y después incrementa el valor de operando1 en 1:`+operando1);

operando2=--operando1;
console.log(`predecremento (--operando1): decrementa el valor de operando1 en 1 y devuelve su contenido:`+operando2);

let potencia=operando1**operando2;
console.log(`Calcula la potencia de un número elevando el operando izquierdo al exponente del operando derecho:`+potencia);

let negativo=-operando2;
console.log(`Devuelve la negación de su operando:`+negativo);

let positivo=`3`;
console.log(`intenta convertir el operando en un número si aún no lo es; `+positivo);

let _positivo=+true;
console.log(`intenta convertir el operando en un número si aún no lo es:`+_positivo)

//El positivo unario convierte en número un string o un booleano
resultado=+`3`;
console.log(typeof(resultado));//nos devuelve el tipo de dato de cualquier variable
console.log(resultado);
resultado=+true;
console.log(typeof(resultado));
console.log(resultado);

//Ejemplo practico
let edadNueva=18;
let matriculado=true;
resultado= matriculado&&edadNueva;
console.log(resultado);//true





