// letra ="";
// while (letra != "s"){
//     letra=prompt("Adivina la letra correcta");
//     if (letra !== "s"){
//         alert("Incorrecto. Intenta de nuevo");
//     } else {
//         alert("Biennn hecho lo has adivinado")
//     }
// }
// console.log("La letra era la s");

let letra ="";
let mensaje="";
let contador=0;
while (letra!="S"){
    letra= prompt("Intento nº: " +contador+" "+mensaje+ " Digite una letra: ");
    mensaje="Has fallado. No es la letra  "+letra;
    contador++;

}
alert("HAS ACERTADO ERA LA LETRA S");