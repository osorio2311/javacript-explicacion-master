let numeroUser;//guardara el numero que escriba el usuario
let numeroSecreto=parseInt(Math.random()*100+1);//sera el numero secreto que genere la máquina
let acertado=false;//cambiara a true cuando el usuario acierte
console.log(numeroSecreto);
while(!acertado){
    numeroUser=Number(prompt("Indica el número"));
    if(numeroSecreto<numeroUser){
        alert("El número debe ser menor");
    }else if(numeroSecreto>numeroUser){
        alert("El número deber ser mayor")
    }else{
        alert("Has acertado!....");
        acertado=true;
    }

}
