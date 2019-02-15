

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
		$('.fadeOut').slideUp(1100);
		$('.resultat').css("visibility", "visible");
	})
})

console.log(score);
const correct = document.getElementById('correct');
const antalRatt = document.getElementById('antalRatt');
correct.addEventListener('click', function(){
	if (score == 0) {
		document.getElementById('antalRatt').style.fontSize ='25px';
		antalRatt.innerHTML = score+" / 10 ....Riktigt dåligt faktiskt.";
	}
	else {
		document.getElementById('antalRatt').style.fontSize ='25px';
		antalRatt.innerHTML = score+" / 10 ";
	}
	if (score == 5) {
		document.getElementById('antalRatt').style.fontSize ='25px';
		antalRatt.innerHTML = score+" / 10 ....Du är halvt dålig, halvt bra.";
	}
	if (score == 10) {
		document.getElementById('antalRatt').style.fontSize ='25px';
		antalRatt.innerHTML = score+" / 10 ....Helt OTROLIGT, du satte alla!!";
	}
	
	
})


document.getElementById('begin').addEventListener('click', function(){
	document.getElementById('beginQuiz').fadeIn();
})



$(document).ready(function(){
	$('#begin').click(function(){
		$('.begin').css("visibility", "visible");
	})
})
	

var i = 0;

$(document).ready(function() {
	$('#btn1').click(function() {
		$('#btn1').css("background-color", "#11695c");
		i++;
		if (i > 1) {
	document.getElementById('tips').innerHTML = "Var god tryck bara på en knapp per fråga i fortsättningen"
}
	});	
});
$(document).ready(function() {
	$('#btn2').click(function() {
		$('#btn2').css("background-color", "#11695c");
		i++;
		if (i > 1) {
	document.getElementById('tips').innerHTML = "Var god tryck bara på en knapp per fråga i fortsättningen"
}
	});	
});
$(document).ready(function() {
	$('#btn3').click(function() {
		$('#btn3').css("background-color", "#11695c");
		i++;
		if (i > 1) {
	document.getElementById('tips').innerHTML = "Var god tryck bara på en knapp per fråga i fortsättningen"
}
	});	
});
$(document).ready(function() {
	$('#correctFraga1').click(function() {
		$('#correctFraga1').css("background-color", "#11695c");
		i++;
		if (i > 1) {
	document.getElementById('tips').innerHTML = "Var god tryck bara på en knapp per fråga i fortsättningen"
}
	});	
});



$(document).ready(function() {
	$('.grid-2 #btn1').click(function() {
		$('.grid-2 #btn1').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-2 #correctFraga2').click(function() {
		$('#correctFraga2').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-2 #btn3').click(function() {
		$('.grid-2 #btn3').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-2 #btn4').click(function() {
		$('.grid-2 #btn4').css("background-color", "#11695c");
	});	
});



$(document).ready(function() {
	$('.grid-3 #btn1').click(function() {
		$('.grid-3 #btn1').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-3 #btn2').click(function() {
		$('.grid-3 #btn2').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-3 #correctFraga3').click(function() {
		$('#correctFraga3').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-3 #btn4').click(function() {
		$('.grid-3 #btn4').css("background-color", "#11695c");
	});	
});


$(document).ready(function() {
	$('.grid-4 #correctFraga4').click(function() {
		$('#correctFraga4').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-4 #btn2').click(function() {
		$('.grid-4 #btn2').css("background-color", "#11695c");
	});	
});



$(document).ready(function() {
	$('.grid-5 #btn1').click(function() {
		$('.grid-5 #btn1').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-5 #btn2').click(function() {
		$('.grid-5 #btn2').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-5 #btn3').click(function() {
		$('.grid-5 #btn3').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-5 #correctFraga5').click(function() {
		$('.grid-5 #correctFraga5').css("background-color", "#11695c");
	});	
});



$(document).ready(function() {
	$('.grid-6 #correctFraga6').click(function() {
		$('.grid-6 #correctFraga6').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-6 #btn2').click(function() {
		$('.grid-6 #btn2').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-6 #btn3').click(function() {
		$('.grid-6 #btn3').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-6 #btn4').click(function() {
		$('.grid-6 #btn4').css("background-color", "#11695c");
	});	
});


$(document).ready(function() {
	$('.grid-7 #correctFraga7').click(function() {
		$('.grid-7 #correctFraga7').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-7 #btn2').click(function() {
		$('.grid-7 #btn2').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-7 #btn3').click(function() {
		$('.grid-7 #btn3').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-7 #btn4').click(function() {
		$('.grid-7 #btn4').css("background-color", "#11695c");
	});	
});


$(document).ready(function() {
	$('.grid-8 #btn1').click(function() {
		$('.grid-8 #btn1').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-8 #btn2').click(function() {
		$('.grid-8 #btn2').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-8 #btn3').click(function() {
		$('.grid-8 #btn3').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-8 #correctFraga8').click(function() {
		$('.grid-8 #correctFraga8').css("background-color", "#11695c");
	});	
});


$(document).ready(function() {
	$('.grid-9 #btn1').click(function() {
		$('.grid-9 #btn1').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-9 #correctFraga9').click(function() {
		$('.grid-9 #correctFraga9').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-9 #btn3').click(function() {
		$('.grid-9 #btn3').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-9 #btn4').click(function() {
		$('.grid-9 #btn4').css("background-color", "#11695c");
	});	
});



$(document).ready(function() {
	$('.grid-10 #btn1').click(function() {
		$('.grid-10 #btn1').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-10 #btn2').click(function() {
		$('.grid-10 #btn2').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-10 #correctFraga10').click(function() {
		$('.grid-10 #correctFraga10').css("background-color", "#11695c");
	});	
});
$(document).ready(function() {
	$('.grid-10 #btn4').click(function() {
		$('.grid-10 #btn4').css("background-color", "#11695c");
	});	
});












