var x = 100
var y = 400

/// Keydown = invocado para cada tecla pressionada:
$("#campo").keydown(function (evento) {

	if (evento.which == 37) {
		// Situação em que o usuário pressionou a seta da esquerda:
		$("#cachorro").css("margin-left", x);
		x = x - 50

	}

	if (evento.which == 38) {
		// Situação em que o usuário pressionou a seta de cima:
		$("#cachorro").css("margin-top", y);
		y = y - 50

	}

	if (evento.which == 39) {
		// Situação em que o usuário pressionou a seta da direita:
		$("#cachorro").css("margin-left", x);
		x = x + 50


	}

	if (evento.which == 40) {
		// Situação em que o usuário pressionou a seta de baixo:
		$("#cachorro").css("margin-top", y);
		y = y + 50

	}

	

	if (x > 820 && x <= 950 && y >= 170 && y <= 320) {
		alert('Parabéns você levou o cachorro a casa dele!')
	}



});

