// var arregloMes = ["Enero", "Febrero", "Marzo", "Abril", 
// 				  "Mayo", "Junio", "Julio", "Agosto", 
// 				  "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 

// var iterador = 0;

// function iteradorMeses() {
// 	if(iterador <=  arregloMes.length-1) {
// 		console.log(arregloMes[iterador] + " " + iterador + " " + (arregloMes.length-1));
// 		iterador = iterador + 1;
// 		iteradorMeses();
// 	}
// }

var arraySentimientos = ["contento", "triste", "enamorado", "odio", "intenso", "soledad", "angustia"];
var arraySaludos = ["hola", "hey"];

var contandor = 0;

var banderaHola = false;

//5 para res sent y 7 para sent
function valorRandom(numeroRandom) {
    var x = Math.floor((Math.random() * numeroRandom) + 1);
    return x;
}

function buscarContenido (palabra, cadenaCarac) {
    var n = cadenaCarac.search(palabra);
    return n;
}

function respondePregunta() {
	var numero = prompt("Pregunta Algo", "");
	
	for(var i = 0 ; i <= arraySaludos.length-1; i++) {
		if(buscarContenido(arraySaludos[i], numero.toLowerCase() ) != -1) {
			console.log("Hola!!!");
			banderaHola = true;
		}
	}
	if(banderaHola) {
		for(var i = 0 ; i <= arraySentimientos.length-1; i++) {
			if(buscarContenido(arraySentimientos[i], numero.toLowerCase() ) != -1) {
				// console.log("si existe el Sent");
				switch(arraySentimientos[i]) {
				    case "contento":
				        console.log(respuestasContento());
				        break;
				    case "triste":
				        console.log("Pregunta mas triste");
				        break;
				    default:
				        console.log("Pregunta CON SENTIMIENTO");
				        break; 
				}
			} else{
			}
		}
	}
	respondePregunta();
}

function respuestasContento() {

	switch(valorRandom(5)) {
	    case 1:
	        console.log("Pregunta mas Contento 1");
	        break;
	    case 2:
	        console.log("Pregunta mas Contento 2");
	        break;
	    case 3:
	        console.log("Pregunta mas Contento 3");
	        break;
        case 4:
	        console.log("Pregunta mas Contento 4");
        	break;
        case 5:
	        console.log("Pregunta mas Contento 5");
	        break;

	}
}

function respuestasTRiste() {

	switch(valorRandom(5)) {
	    case 1:
	        console.log("Pregunta mas Triste 1");
	        break;
	    case 2:
	        console.log("Pregunta mas Triste 2");
	        break;
	    case 3:
	        console.log("Pregunta mas Triste 3");
	        break;
        case 4:
	        console.log("Pregunta mas Triste 4");
        	break;
        case 5:
	        console.log("Pregunta mas Triste 5");
	        break;

	}
}