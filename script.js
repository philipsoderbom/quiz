

var score = 0;

document.getElementById('correctFraga1').addEventListener('click', function(){      /*fråga 1*/
	score++;
	/*document.getElementById('resultat').innerHTML = "Resultat: "+score+"/10";*/
	console.log(score);
})
document.getElementById('correctFraga2').addEventListener('click', function(){    /*fråga 2*/
	score++;
	console.log(score);
})
document.getElementById('correctFraga3').addEventListener('click', function(){        /*fråga 3 */
	score++;
	console.log(score);
})
document.getElementById('correctFraga4').addEventListener('click', function(){       /* fråga 4*/
	score++;
	console.log(score);
})
document.getElementById('correctFraga5').addEventListener('click', function(){         
	score++;
	console.log(score);
})

document.getElementById('correctFraga6').addEventListener('click', function(){      
	score++;
	console.log(score);
})

document.getElementById('correctFraga7').addEventListener('click', function(){      
	score++;
	console.log(score);
})

document.getElementById('correctFraga8').addEventListener('click', function(){         
	score++;
	console.log(score);
})

document.getElementById('correctFraga9').addEventListener('click', function(){       
	score++;
	console.log(score);
})
document.getElementById('correctFraga10').addEventListener('click', function(){      
	score++;
	console.log(score);
})




$(document).ready(function(){
	$('#BackToTop').click(function(){
		$('.fadeOut').fadeOut(1800);
		$('.resultat').css("visibility", "visible");
	})
})


const correct = document.getElementById('correct');
const antalRatt = document.getElementById('antalRatt');
correct.addEventListener('click', function(){
	antalRatt.innerHTML = "Du fick "+score+" rätt av 10 möjliga!";
})
