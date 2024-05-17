// /**
//  Tipos de Variables

//  JavaScript no obliga a definir que tipo de variable estas trabajando
//  */




//  nombre="José Luis Osorio";//tipo de variable String, puedes utilizar "" o ''
//  edad=25; //tipo Number, no necesita comillas los numeros
//  espaniol=true; //tipo Boolean. Solo tiene 2 estados (true; o false;)
//  sexo=null;

//  //¿Como puedes ver los valores sin mostrarlos en el html?
//  //Se utiliza para ver la ejecución o valores -> console.log( lo que quieres mostrar)
//  console.log(nombre);
//  console.log(edad);
//  console.log(espaniol);
//  console.log(sexo);

//  //typeof; para ver que tipo de valor le estamos dando
//  //operador de concatenación + une dos o más expresiones de salida
//  console.log("nombre->"+typeof(nombre) +" !");
//  console.log("edad->"+typeof(edad));
//  console.log("espaniol->"+typeof(espaniol));
//  console.log("sexo->"+typeof(sexo));

//  direccion="Calle Cardenio, 30";
//  //Simplificar las cadenas con Backticks con ${}
//  console.log(`Datos Personales->Nombre ${nombre} , Dirección: ${direccion}`);
//  console.log("Datos Personales->Nombre:"+ nombre + ", Dirección: " + direccion);

//  //Si la variable es numérica, podemos realizar operaciones matemáticas. Suma la variable "edad"+1  variable: edad=25
//  console.log("El año que viene cumpliras " + (edad+1) + " años");
//  //o
//  console.log(`El año que viene cumpliras ${edad+1} años`);

//  console.log(`Esta es una frase de Cervantes \`En un lugar de la Mancha\``);
//  console.log("Esta es una frase de Cervantes \"En un lugar de la Mancha\"");
//  console.log("Esta es una frase de Cervantes `En un lugar de la Mancha`");
//  console.log("Esta es una frase de Cervantes \n`En un lugar de la Mancha`");
//  console.log("Esta es una frase de Cervantes \n\t`En un lugar de la Mancha`");
//  console.log("El signo de la eternidad Armenia es \u{058D}");
//  console.log("El signo de Bitcoin es \u20BF");

//  //Actividad Propuesta 2.4 //
//  console.log('El acceso a la ruta C:\\\\usuario\\ tarda 1\'23\", algo considerado "lento" en la actualidad');

//  console.log("El acceso a la ruta C:\\\\usuario\\ tarda 1'23\", algo considerado \"lento\" en la actualidad")








// /**Tipos de datos Numéricos (number) */
// altura=1.78; //tipo de dato numérico es decimal
// diametro=2e-9;
// console.log(`Altura->${altura}`);
// console.log(`Diámetro->${diametro}`);

// console.log(altura/0); //-> Infinito

// resultado=altura/0;
// otroResultado=resultado+10;
// console.log(otroResultado);


// //Si tienes otro tipo de datos y quieres hacer otra operación matemática-> NaN Not and Number
// resultado=nombre*25;
// console.log(resultado); // * / % ** pero con el + siempre concatena
// resultado=nombre+" "+edad;
// console.log(resultado);

// resultado=`${nombre} ${edad}`;
// console.log(resultado);


// //Tipo de datos Booleanos (true o false)
// //true->1  false->0
// valorVerdadero=true;
// valorFalso=false;
// console.log(`1-¿true?:${Boolean(true)}`);
// console.log(`2-¿false?:${Boolean(false)}`);
// console.log(`3- 1: ${Boolean(1)}`);
// console.log(`4- 0: ${Boolean(0)}`);

// //si existe datos.... siempre va a ser true!
// texto="Un texto ejemplo";
// console.log(`5- texto: ${Boolean(texto)}`);texto

// textoVacio="";
// console.log(`6- textoVacio: ${Boolean(textoVacio)}`);texto


// //Conversion de tipos//
// masAnios="10";  //tipo de datos es string o cadena...

// console.log(edad + masAnios); //2510
// console.log(edad + Number(masAnios)); //35 -> casting
// console.log(String(edad) + masAnios); //2510

// console.log(true*7); 
// console.log(9-true);
// console.log(9-false);
// console.log(edad*masAnios);
// console.log(edad/masAnios);
// console.log(edad-masAnios);
// console.log(undefined/edad); //resultado NaN
// console.log(null*edad); //resultado 0
// console.log(edad**masAnios); //doble asterisco es exponencial. uno asterisco solo es multiplicar

// /**--------------------------------------------------------- */


// parrafo=document.getElementById("parrafo");
// //parrafo=documento.querySelectorAll("p"); //Arrays
// parrafo.innerHTML="Es una prueba de JavaScript en el DOM"
// parrafo.innerHTML="";//inner es inyectar parrafo sin que este en el html. Esto es por id. si solo fuese la segunda linea saldría inyectado "es una prueba de JavaScript En el DOM, pero al leer la tercera linea ya no saldría nada"


// cuadrado=document.querySelector(".cuadrado"); //clase
// parrafo=document.querySelector("#parrafo"); //id -> solo el primero cuando existan varios
// titulo=document.querySelector("h1"); //etiqueta

// titulo.innerHTML="Práctica de JavaScript";
// cuadrado.innerHTML="A";


// document.write("Es una prueba de document.write");

// //VARIABLES
// var edad="cincuenta y ocho";

// let email="j@gmail.com";
// document.write("<p>" +email+"</p>");
// document.write("<p>"+edad+"</p>"); //Cuidado con el var!


// /*Ambito de bloque*/
// var mensaje="Mensaje 1"; //declaramos mensaje
// function mostrarMensaje(){ //funcion-> actua como un bloque
//     mensaje="<br>Mensaje dentro del Bloque";
//     document.write(mensaje);
// }
// mostrarMensaje();
// document.write("<br>mensaje fuera->" + mensaje);



// /*let*/
// /* Ambito de bloque
// */
// document.write("<br>***********");
// let mensaje1="Mensaje 1"; //declaramos mensaje
// function mostrarMensaje2(){ //funcion-> actua como un bloque
//     let mensaje1="<br>Mensaje dentro del Bloque";
//     document.write(mensaje1);
// }
// mostrarMensaje2();
// document.write("<br>mensaje fuera->" + mensaje1);


// //************Constantes******** */
// const IVA=21;
// let precio=50*((IVA/100)+1);
// document.write("<br>El precio final es " + precio);

// precio=105*((IVA/100)+1);
// document.write("<br>El precio final es " + precio);


// //salidas por consola
// console.error("aqui hay un error");
// console.info("Es una informacion");
// console.warn("Es una notificación importante");
// console.log(`%c Fin del Programa`, `font-weight: bold;color:blue;text-decoration:underline`);


// //salidas de mensajes
// //alert("Es una alerta");
// document.write("<br>prueba...prueba...prueba!!!")

// //mensajes de confirmación (si /no...true/false)
// /*let confirmacion=confirm("¿Quieres salir del programa?")
// document.write(`<br>El usuario quiere salir?->${confirmacion}`);
// if(confirmacion){
//     window.location.replace("https://google.es")
// }else{
//     alert("Te quedas aqui!")
// }
// //preguntará= ¿quieres salir del programa? si aceptas saldrá escrito "el usuario quieres salir?true o false si cancelas"

// //mensaje de entrada de datos
// nombre=prompt("Escribe tu nombre");
// document.write(`<br>El nuevo nombre es->${nombre}`);


// /*Actividad propuesta 2.5*/
// nombre=prompt("Introduce tu nombre");
// document.write(`<br>Nombre de Usuario:${nombre}`);

// let confirmacion=confirm("¿Quieres abandonar el programa?");
// if(confirmacion){
//     alert("Has decidido irte")
// }else{
//     alert("Has decidido quedarte")
// }

// console.log(`%cFin del Programa`, `font-weight: bold;color:blue;text-decoration:underline`);




// let a=5;
// let b=a;
// console.log(`El valor de b es:` + b);

// //una suma y se la asignamos a la variable c
// //forma simplificada
// a=a+b; //o de forma simplificada
// //a=5+5
// console.log(`valor del primer a->`+a);//resultado 10

// a+=b; //el valor de a se le suma otra vez su valor + el valor de b
// //10+5
// console.log(`El valor del segundo a->` +a);

// let c= a%b; //modulo=0 porque a=15 b=5 15/3=3 resto 0
// console.log(`El valor de c es ->` + c);

// let d=b**4;
// console.log(`El valor de d es:` +d);

// //Operadores de comparación -> solo dan como resultado true o false
// //Igual
// let respuesta=a==b;//false
// console.log(respuesta);

// //distinto
// respuesta=a !=b; //true
// console.log(respuesta);

// //Esplicación de la igualdad estricta
// let e=`5`;//string
// respuesta=b==e; //da true porque los dos valen 5
// console.log(respuesta);
// //en el caso de igualdad estricta resulta falso porque b es number y e es string
// respuesta=b===e;
// console.log(respuesta);


// //desigualdad estricta
// respuesta=b!==e; //b no es igual que e en valor o en tipo
// console.log(respuesta);

// //Mayor | Menor | Mayor o igual | Menor o igual
// respuesta=a>b;//true
// respuesta=c<b;//true
// respuesta=b>=e;//compara sus valores! conversión automática
// console.log(respuesta);

// ++a //a vale 16
// console.log(`ahora a vale->`+a);

// a--;
// console.log(`ahora a vale->`+a);
// a-=3;
// console.log(`ahora a vale->`+a);


// console.log(`Operaciones con AND`);
// console.log(`1.=> ${true&&true}`);
// console.log(`2.=> ${true&&false}`);
// console.log(`3.=> ${false&&true}`);
// console.log(`4.=> ${false&&false}`);
// //Evaluamos condiciones
// console.log(`6.=> ${4>5 && 3>5}`);
// console.log(`7.=> ${4<=5 && 3<=5}`);

// console.log(`Operaciones con OR`);
// console.log(`1=> ${true||true}`);
// console.log(`2=> ${true||false}`);
// console.log(`3=> ${false||true}`);
// console.log(`4=> ${false||false}`);

// console.log(`Operaciones con NOT`);
// console.log(`1.=> ${!true}`);
// console.log(`2.=> ${!false}`);

// //ejemplo práctico
// let edadNueva=`pelo`;
// let matriculado=`canas`;
// resultado=edad&&matriculado; 
// console.log(resultado);//true

// //Operador ternario
// resultado=a>b?`A es mayor que B`:`B es mayor que A`;
// console.log(resultado);


// //Ejercicio solicita por promt la edad e indica por una alert si es mayor de edad o omenor de edad
// //edadNueva=prompt(`Indica tu Edad`);
// //resultado=edadNueva>=18?`Eres Mayor de Edad`:`Eres menor de edad`;
// //alert(resultado);
// edadNueva>=19?edadNueva++:edadNueva--;
// console.log(edadNueva);


// //Estructura condicional if - else
// console.log(`*************`);
// console.log(`Inicio`);
// let local=2;
// let visitante=1;
// if(local===visitante) {
// console.log(`Hay empate`);
// }
// else{
//     console.log;(`No hay empate`);
// }
// console.log("Fin");


// //estructura condicionales con if else if
// if (local === visitante) {
//     console.log(`Hay empate`);
// } else if(local > visitante) {
//     console.log(`Gana equipo local`);
// } else{
//     console.log("Gana equipo visitante");
// }



let imagen=document.querySelector("#imagen");
imagen.src="../img/bombilla-off.gif";
let imagen1=document.querySelector("#imagen1");
imagen.src="../img/bombilla-on.gif";