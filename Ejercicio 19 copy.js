let opcionHumano = 0;
let opcionMaquina = 0;
let contadorHumano = 5;
let contadorMaquina = 5;
let numeroDeVidas = 0;
let imgCorazones = "<img  id=\"corazon\" src='Images/Corazon.png' alt='Corazon'></img>";
function iniciarJuego(){
    numeroDeVidas=parseInt(prompt("Introduce el numero de vidas."));
    inicializarJuego();
}
function inicializarJuego() {
    opcionHumano = 0;
    opcionMaquina = 0;
    contadorHumano = numeroDeVidas;
    contadorMaquina = numeroDeVidas;
    document.getElementById("mostrarImagenes").innerHTML="";
    document.getElementById("corazonesHumano").innerHTML ="";
    document.getElementById("corazonesMaquina").innerHTML ="";
    document.getElementById("mostrarResultado").innerHTML ="";
    for(i=0;i<contadorHumano;i++) {
        document.getElementById("corazonesHumano").innerHTML += imgCorazones;
        document.getElementById("corazonesMaquina").innerHTML += imgCorazones;
    }
    for(i=1;i<=3;i++) {
        document.getElementById("mostrarImagenes").innerHTML += "<img src='Images/PPT"+i+".jpg' onclick='compararResultados("+i+")'>"; 
    }
}
function compararResultados(opcionEscogida){
    let opcionMaquina = Math.floor(Math.random() * 3)+1;
    let mostrarImagenMaquina =  "<img src='Images/PPT"+opcionMaquina+".jpg'>";
    document.getElementById("imagenMaquina").innerHTML = mostrarImagenMaquina;
    console.log(opcionMaquina);
    if (opcionEscogida == 1) {
         if(opcionMaquina==1){
            document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " Es un Empate!" ; 
         }
         if(opcionMaquina==2){
            document.getElementById("corazonesHumano").innerHTML = "";
            contadorHumano=contadorHumano-1;
            for(i=0;i<contadorHumano;i++) {
            document.getElementById("corazonesHumano").innerHTML += imgCorazones;
            }
            document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es la Maquina!";
         }  
         if(opcionMaquina==3){
            document.getElementById("corazonesMaquina").innerHTML = "";
            contadorMaquina=contadorMaquina-1;
            for(i=0;i<contadorMaquina;i++) {
            document.getElementById("corazonesMaquina").innerHTML += imgCorazones;
            }
            document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es el Humano!";
         }
    }
    if(opcionEscogida==2){
        if(opcionMaquina==1){
            document.getElementById("corazonesMaquina").innerHTML = "";
            contadorMaquina=contadorMaquina-1;
            for(i=0;i<contadorMaquina;i++) {
            document.getElementById("corazonesMaquina").innerHTML += imgCorazones;
            }
            console.log("funciona putito version else if 2");
            document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es el Humano!";
        }
        if(opcionMaquina==2){
            document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " Es un Empate!" 
        }
        if(opcionMaquina==3){
            document.getElementById("corazonesHumano").innerHTML = "";
            contadorHumano=contadorHumano-1;
            for(i=0;i<contadorHumano;i++) {
            document.getElementById("corazonesHumano").innerHTML += imgCorazones;
            }
            document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es la Maquina!" ; 
        
        }
    }
    if(opcionEscogida==3){
        if(opcionMaquina==1){
            document.getElementById("corazonesHumano").innerHTML = "";
            contadorHumano=contadorHumano-1;
            for(i=0;i<contadorHumano;i++) {
            document.getElementById("corazonesHumano").innerHTML += imgCorazones;
            }
            document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es la Maquina!";    
        }
        if(opcionMaquina==2){
            document.getElementById("corazonesMaquina").innerHTML = "";
            contadorMaquina=contadorMaquina-1;
            for(i=0;i<contadorMaquina;i++) {
            document.getElementById("corazonesMaquina").innerHTML += imgCorazones;
            }
            document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es el Humano!";
        }
        if(opcionMaquina==3){
        document.getElementById("mostrarResultado").innerHTML = "<img src='Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " Es un Empate!" 

        }
    }
    
    if(contadorHumano==0){
        alert("??Lo siento has Perdido! ??Bien Jugado");
        inicializarJuego();
    }
    if(contadorMaquina==0){
        alert("??Felicidades has Ganado! ??Bien Jugado!");
        inicializarJuego();
    }

}