



/*$(document).ready(function(){
	var array = ["real madrid", "manchester united", "borussia dortmund", "juventus"];
	var aktuellfraga = 0;
	$("form").on('submit', function(){
		return false;
		
	})
})*/


var i = 0;
message = 'Ange ditt svar . . .';
speed = 150;

function typeWriter() {
	if (i < message.length) {
		msg = svarsRuta.getAttribute('placeholder') + message.charAt(i);
		svarsRuta.setAttribute('placeholder', msg);
		i++;
		setTimeout(typeWriter, speed);

	}
}


const nästaKnapp = document.getElementById('nästa-knapp');
const svarsRuta = document.getElementById('svarsRuta');
const starta = document.getElementById('startaQuiz');
const heading = document.getElementById('heading');

starta.addEventListener('click', () => {
	document.getElementById('tip').innerHTML = "OBS skriv svaret med <b>gemener</b>";
	document.getElementById('gissa_loggan').style.visibility = 'visible';
	svarsRuta.style.visibility = 'visible';
	/*klarKnapp.style.visibility = 'visible';*/
	nästaKnapp.style.visibility = 'visible';
	heading.style.visibility = 'visible';
	svarsRuta.focus();
	starta.remove();
	typeWriter();
})

nästaKnapp.addEventListener('click', () => {
	document.getElementById('gissa_loggan_2').style.visibility = 'visible';
	document.getElementById('svarsRuta_2').style.visibility = 'visible';
	document.getElementById('nästa-knapp_2').style.visibility = 'visible';
})

const nästaKnapp2 = document.getElementById('nästa-knapp_2');
nästaKnapp2.addEventListener('click', () => {
	document.getElementById('trean').style.visibility = 'visible';
})











function rätta(){

	 var fraga1 = document.quiz.fraga1.value;
	 var fraga2 = document.quiz.fraga2.value;
	 var antalratt = 0;

	 if (fraga1 == "real madrid"){
	 	antalratt++;
	 }
	
	 
	 if (fraga2 == "manchester united") {
	 	antalratt++
	 }


document.getElementById('antalratt').innerHTML = "Du fick " + antalratt + " rätt av 5 möjliga!"
}








