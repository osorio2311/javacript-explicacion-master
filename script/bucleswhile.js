let pases=0;
//bucle while, evalua la condición y si es true entra en el bucle, sino finaliza y va a la siguiente linea
while(pases<10){//booleano (true o false)
    console.log("Número de pase->" + pases)
    pases++;
}

/**Mostrar la tabla de multiplicar */
let x=1;
let y=1;
while(x<10){
    while(y<10){
        console.log(x+"x"+y+"="+(x*y));
        y++;
    }
    x++;//se incrementa x
    y=1;//se inicializa y para que en la proxima vuelta comience en 1
}


//Random o aleatorio! 
let numeroAleatorio=parseInt(Math.random()*100+1);
console.log(numeroAleatorio);


//array o cadenas
let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Abecedario guarda todas las letras... que van con indice desde el 0=A hasta la 26=Z
let letraAleatoria=parseInt(Math.random()*26);//coge un número aleatorio. math.random coge un número aleatorio decimal, pero con parseInt lo pasa de decimal a entero
let mensaje="";
let contador=0;
console.log(abecedario[letraAleatoria]);
let letra="";
while(letra!=abecedario[letraAleatoria]){
    letra= prompt("Intento nº: " +contador+" "+mensaje+ " Digite una letra: ");
    mensaje="Has fallado. No es la letra  "+letra;
    contador++;
}
alert("Adivinastes...es la letra-> " +abecedario[letraAleatoria])