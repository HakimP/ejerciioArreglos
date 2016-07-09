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
var arraySentimientos = [["contento",["¡Estoy súper bien!", "Eso me hace feliz", "¡Qué emocionante!", "¿También estás feliz?", "¡Me caes muy bien!"]],
						 ["triste",["Yo también me siendo devastado", "¿Has pensado en la muerte?", "Estoy a punto de llorar...", "No tengo ánimo de nada.", "Eso me hace sentir triste también..."]],
						   ["enamorado",["enamorado", "enamorado2", "enamorado3", "enamorado4", "enamorado5"]],
						   ["odio",["Eres despreciable.", "¡Vete al demonio!.", "Estás acabando con la poca paciencia que ni siquiera tenía.", "Estoy harto. Preferiría ser aplastado por un elefante a seguir platicando contigo.", "Estoy perdiendo mi tiempo contigo."]],
						   ["intenso",["¡Eres mi mejor amigo! Aunque no sepa nada de ti.", "¡Wow! ¡Cuéntame más, quiero saber más!", "¡No lo puedo creer! ¡Eres increíble!", "¡JUUUMBOTROOOON!", "¡Qué moderrrno!"]],
						   ["soledad",["Yo no tengo amigos.", "Todos evitamos estar solos.", "Normalmente camino solo.", "Me gusta el silencio.", "La ausencia de alguien que estimas provoca el sentimiento de soledad y vacío."]],
						   ["angustia",["Algo malo va a pasar...", "Tengo un mal presentimiento al respecto", "De sólo pensarlo ya me estoy estresando.", "Me estás asustando...", "Prefiero no meterme en problemas."]],
						   ["",["No tengo nada que decir al respecto.","Cambiemos de tema.","¿Y qué más?","No sé qué responder a eso...","¿Y si me preguntas otra cosa?"]]
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
