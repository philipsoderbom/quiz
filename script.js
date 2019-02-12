



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
	document.getElementById('container').style.height = '2000px'
	svarsRuta.focus();
	starta.remove();
	typeWriter();
})

nästaKnapp.addEventListener('click', () => {
	document.getElementById('gissa_loggan_2').style.visibility = 'visible';
	document.getElementById('svarsRuta_2').style.visibility = 'visible';
	document.getElementById('nästa-knapp_2').style.visibility = 'visible';

const nästaKnapp2 = document.getElementById('nästa-knapp_2');
nästaKnapp2.addEventListener('click', () => {
	document.getElementById('trean').style.visibility = 'visible';
})


/*Rättning*/
var Svar = ["real madrid", "manchester united", "R.Madrid", "spelare20", "kiev", "ar2005"];
var j = 0;
var antalratt = 0;

const ratta = document.getElementById('klar-knapp');
ratta.addEventListener('click', function(){
	
		var realmadrid = document.getElementById('svarsRuta').name;
		if (Svar[0] == realmadrid) {
			antalratt++;
			j++;
		}
		var manutd = document.getElementById('svarsRuta_2').name;
		if (Svar[1] == manutd) {
			antalratt++;
			j++;
			
		};


		var RMadrid = document.getElementById('inlineCheckbox1').value;
		if (Svar[2] == RMadrid ) {
			antalratt++;
			j++;
		};

		var spelare20 = document.getElementById('inlineCheckbox5').value;
		if (Svar[3] == spelare20 ) {
			antalratt++;
			j++;
		};

		var kiev = document.getElementById('inlineCheckbox9').value;
		if (Svar[4] == kiev ) {
			antalratt++;
			j++;
		};

		var ar2005 = document.getElementById('inlineCheckbox11').value;
		if (Svar[5] == ar2005 ) {
			antalratt++;
			j++;
		};


	document.getElementById('antalratt').innerHTML = "Du fick " + antalratt + " rätt av 6 möjliga!";


});
});
