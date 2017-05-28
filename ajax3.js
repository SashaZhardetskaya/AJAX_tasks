$(document).ready(function(){
	$('button').on('click', sendAjax)
});

function sendAjax(){
	$.post(
		//послать куда?
		"a3.php",
		{
			"sex": $('#sex').val(), //внутри аджакс запроса исп двойные ковычки
			"height": $('#height').val()
		},
		//имя функции в случае успеха if success
		ifSuccess

	);
}

function ifSuccess(data){n
	$('#out').html(data);
}