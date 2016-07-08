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
//DB SCHEMA
var arraySentimientos = [["contento",["contento", "contento2", "contento3", "contento4", "contento5"]], 
						 ["triste",["triste", "triste2", "triste3", "triste4", "triste5"]], 
						   ["enamorado",["enamorado", "enamorado2", "enamorado3", "enamorado4", "enamorado5"]], 
						   ["odio",["odio", "odio2", "odio3", "odio4", "odio5"]], 
						   ["intenso",["intenso", "intenso2", "intenso3", "intenso4", "intenso5"]], 
						   ["soledad",["soledad", "soledad2", "soledad3", "soledad4", "soledad5"]], 
						   ["angustia",["angustia", "angustia2", "angustia3", "angustia4", "angustia5"]],
						   ["",["c","c","c","c","c"]]
						];

var arraySaludos = ["hola", "hey"];
var contandor = 0;

var banderaHola = false;

//5 para res sent y 7 para sent
function valorRandom(numeroRandom) {
    var x = Math.floor((Math.random() * numeroRandom));
    return x;
}

function buscarContenido (palabra, cadenaCarac) {
    var n = cadenaCarac.search(palabra);
    return n;
}

var coco = false;
var contador = 1;

function respondePregunta() {
	var numero = prompt("Pregunta Algo", "");

	for(var i = 0 ; i <= arraySaludos.length-1; i++) {
		if(buscarContenido(arraySaludos[i], numero.toLowerCase() ) != -1) {
			console.log("Hola!!!");
			banderaHola = true;
			contador = 0;
		}
	}
	if(!coco && banderaHola && contador > 0) {
		console.log("no mames");
	}

	for(var i = 0 ; i <= arraySentimientos.length-1; i++) {
		coco = false;
		if(buscarContenido(arraySentimientos[i][0], numero.toLowerCase()) != -1) {
			// console.log("si existe el Sent");
			contador +=1;
			switch(arraySentimientos[i][0]) {
			    case "contento":
			        console.log(respuestasSentimientos(i));
			        coco = true;
			        break;
			    case "triste":
			        console.log(respuestasSentimientos(i));
			        coco = true;
			        break;
			    case "enamorado":
			        console.log(respuestasSentimientos(i));
			        coco = true;
			        break;
			    case "odio":
			        console.log(respuestasSentimientos(i));
			        coco = true;
			        break;
			    case "intenso":
			        console.log(respuestasSentimientos(i));
			        coco = true;
			        break;
			    case "soledad":
			        console.log(respuestasSentimientos(i));
			        coco = true;
			        break;
			    case "angustia":
			        console.log(respuestasSentimientos(i));
			        coco = true;
			        break;
			    default:
			        respondePregunta();
			        break; 
			}
			
		}	

	}
}

function respuestasSentimientos(sentimi) {
	var randomActual = valorRandom(5);
	console.log(arraySentimientos[sentimi][1][randomActual]);
}

function alerta() {
	alert(arraySentimientos[0][0]  + " espacio " + arraySentimientosV2[0][1][1]);
}