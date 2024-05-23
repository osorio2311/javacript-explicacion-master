/* Entrada a un pub-> mayor de 18 años */
//***let edad = Number(prompt("Edad")); //conversión manual de tipo de dato, porque en principio es string
// verificaar que edad sea tipo de dato numérico
// console.log(typeof(edad)); // si es string tengo que pasarlo a numérico
// //si tiene mas de 18 años, entonces entrar = true
// let entrada = true; // se iniciliza a falso para que nadie entre si no cumple la condición
// if(edad>=18){
//     entrada=true;
// }
// console.log("Puede entrar al Pub?" + entrada);


// /***************/


// /* Ejemplo de if anidado donde se declara un animal y luego se va entrando en diferentes if, hasta llegar al último else... y veremos que pasa*/
// let mascota=`gato`;
// if (mascota="perro"){
//     console.log(`La mascota es perro `);
// }else if (mascota == `tortuga`){
//     console.log(`La mascota es una tortuga`);
// }else if (mascota ==`canario`){
//     console.log(`La mascota es un canario`);
// }else{console.log(mascota);}

/* Nota: en el ejemplo anterior no se cumple ninguna de las condiciones, y va directo al else final*/ 

/**Si Ana tiene dinero y el artículo está en venta, podrá irse de compras sino, se queda en casa */

// let dinero=prompt(`¿Tiene dinero?`); // todo lo que escribas lo pase a mayusculas -> string.toUpperCase
// let enVenta=prompt(`¿Está en venta?`);
// console.log(dinero);
// console.log(enVenta);
// if (dinero.toUpperCase() == `SI` && enVenta.toUpperCase() =="SI"){
//     console.log(`Ana se puede ir de compras`);
// }else {
//     console.log(`Ana se queda en casa`);
// }


/*Estructura Switch Case*/
// console.log(`Menú Iniciado`);
// let letra=prompt(`Indica tu opción: [c]opiar [a]brir [p]egar`);
// switch (letra){
//     case `a`: case `A` :{
//         console.log(`Se abre archivo`);
//         break;
//     }
//     case `c`: case `C`: {
//         console.log(`Se copia archivo`);
//         break;
//     }
//     case `p`: case `P`: {
//         console.log(`se pega el archivo`);
//         break;
//     }
//     default: console.log(`Opción incorrecta`);
// }

// console.log(`Menú Cerrado`);


// let letraDia= prompt(`Indica el día de la semana; L,M,X,J,V`)
// letraDia = letraDia.toUpperCase();
// switch (letraDia) {
//     case 'L':
//         console.log("Lunes - Horario: 9:00 AM - 5:00 PM"); 
//         break;
//     case 'M':
//         console.log("Martes - Horario: 9:00 AM - 5:00 PM");
//         break;
//     case 'X':
//         console.log("Miércoles - Horario: 9:00 AM - 5:00 PM");
//         break;
//     case 'J':
//         console.log("Jueves - Horario: 9:00 AM - 5:00 PM");
//         break;
//     case 'V':
//         console.log("Viernes - Horario: 9:00 AM - 5:00 PM"); 
//         break;
//     default:
//         console.log("Por favor, introduce una letra válida (L, M, X, J, V.")
// }

let horario="";//salida en html para limpiarlo....
let botones=document.querySelectorAll(".boton");//toma todos los elementos que tiene la clase boton y crea un array! 
botones.forEach(elemento=>{ //En JS forEach es una función que se le aplica a un array para recorrerlo
    elemento.addEventListener("click",function (){//escucha si hacen click en un botón, y lee su valor
switch (elemento.value){
    case "l":{
        horario="Lunes - Horario: 9:00 AM - 5:00 PM"; 
        break;
    } case "m":{
        horario="Martes - Horario: 9:00 AM - 5:00 PM";
        break;
    } case "x":{
        horario="Miércoles - Horario: 9:00 AM - 5:00 PM";
        break;
    } case "j":{    
        horario="Jueves - Horario: 9:00 AM - 5:00 PM";
        break;
    }  case "v":{
        horario="Viernes - Horario: 9:00 AM - 5:00 PM"; 
        break;
    }  case "s":{
        horario="Descansando"; 
        break;
    }  case "d":{
        horario="Descansando"; 
        break;
    } 
}
 document.querySelector(".horario").innerHTML="<h2>Horario</h2>"+horario;

})
})