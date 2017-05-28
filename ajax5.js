$(document).ready(function(){
	$('button').on('click', sendAjax)
	$('button').on('input', sendAjax)
});

function sendAjax(){
	$.post(
		//послать куда?
		"mail.php",
		{
			"fio": $('#fio').val(), //внутри аджакс запроса исп двойные ковычки
			"email": $('#email').val(),
			"phone": $('#phone').val()
		},
		//имя функции в случае успеха if success
		ifSuccess

	);
}

function ifSuccess(data){
	$('#out').html(data);
}