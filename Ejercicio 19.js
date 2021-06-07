let opcionHumano = 0;
let opcionMaquina = 0;
let contadorHumano = 5;
let contadorMaquina = 5;
let imgCorazones = "<img  id=\"corazon\" src='/Images/Corazon.png' alt='Corazon'></img>";
function iniciarJuego(){
    opcionHumano = 0;
    opcionMaquina = 0;
    contadorHumano = 5;
    contadorMaquina = 5;
    document.getElementById("mostrarImagenes").innerHTML="";
    document.getElementById("corazonesHumano").innerHTML ="";
    document.getElementById("corazonesMaquina").innerHTML ="";
    document.getElementById("mostrarResultado").innerHTML ="";
    for(i=0;i<contadorHumano;i++) {
        document.getElementById("corazonesHumano").innerHTML += imgCorazones;
        document.getElementById("corazonesMaquina").innerHTML += imgCorazones;
    }
    for(i=1;i<=3;i++) {
        document.getElementById("mostrarImagenes").innerHTML += "<img src='/Images/PPT"+i+".jpg' onclick='compararResultados("+i+")'>"; 
    }
}
function compararResultados(opcionEscogida){
    let opcionMaquina = Math.floor(Math.random() * 3)+1;
    let mostrarImagenMaquina =  "<img src='/Images/PPT"+opcionMaquina+".jpg'>";
    document.getElementById("imagenMaquina").innerHTML = mostrarImagenMaquina;
    console.log(opcionMaquina);
    if (opcionEscogida == opcionMaquina) {
        document.getElementById("mostrarResultado").innerHTML = "<img src='/Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " Es un empate!" ;  

    }
    else if( opcionEscogida<opcionMaquina&&opcionEscogida<3&&opcionEscogida>1) {//opcion escogida=2 vs 3
        document.getElementById("corazonesHumano").innerHTML = "";
        contadorHumano=contadorHumano-1;
        for(i=0;i<contadorHumano;i++) {
        document.getElementById("corazonesHumano").innerHTML += imgCorazones;
        }
        document.getElementById("mostrarResultado").innerHTML = "<img src='/Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es la Maquina!" ; 

    }
    else if( opcionEscogida>opcionMaquina&&opcionEscogida<3&&opcionEscogida>1){//opcion escogida=2vs 1
        document.getElementById("corazonesMaquina").innerHTML = "";
        contadorMaquina=contadorMaquina-1;
        for(i=0;i<contadorMaquina;i++) {
        document.getElementById("corazonesMaquina").innerHTML += imgCorazones;
        }
        console.log("funciona putito version else if 2");
        document.getElementById("mostrarResultado").innerHTML = "<img src='/Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es el Humano!";
    }
    else if(opcionEscogida<opcionMaquina&&opcionEscogida<2&&opcionMaquina<3){//1vs2
        document.getElementById("corazonesHumano").innerHTML = "";
        contadorHumano=contadorHumano-1;
        for(i=0;i<contadorHumano;i++) {
        document.getElementById("corazonesHumano").innerHTML += imgCorazones;
        }
        document.getElementById("mostrarResultado").innerHTML = "<img src='/Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es la Maquina!";
    }
    else if(opcionEscogida<opcionMaquina&&opcionEscogida<2&&opcionMaquina>2) {//1vs3
        document.getElementById("corazonesMaquina").innerHTML = "";
        contadorMaquina=contadorMaquina-1;
        for(i=0;i<contadorMaquina;i++) {
        document.getElementById("corazonesMaquina").innerHTML += imgCorazones;
        }
        document.getElementById("mostrarResultado").innerHTML = "<img src='/Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es el Humano!";
    }
    else if(opcionEscogida>opcionMaquina&&opcionEscogida>2&&opcionMaquina>1) {//3vs2
        document.getElementById("corazonesMaquina").innerHTML = "";
        contadorMaquina=contadorMaquina-1;
        for(i=0;i<contadorMaquina;i++) {
        document.getElementById("corazonesMaquina").innerHTML += imgCorazones;
        }
        document.getElementById("mostrarResultado").innerHTML = "<img src='/Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es el Humano!";
    }
    else{
        document.getElementById("corazonesHumano").innerHTML = "";
        contadorHumano=contadorHumano-1;
        for(i=0;i<contadorHumano;i++) {
        document.getElementById("corazonesHumano").innerHTML += imgCorazones;
        }
        document.getElementById("mostrarResultado").innerHTML = "<img src='/Images/PPT"+opcionEscogida+".jpg'>" + "<span id='vs'>vs</span>" + mostrarImagenMaquina + " El ganador es la Maquina!";  
    }        
    if(contadorHumano==0||contadorMaquina==0){
    alert("¡Se acabo el Juego! ¡Bien Jugado!");
    iniciarJuego();
    }

}