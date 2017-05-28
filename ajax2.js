$(document).ready(function(){
	$('button').on('click', sendAjax)
});

function sendAjax(){
	$.post(
		//послать куда?
		"a2.php",
		{
			"year": $('#num1').val(), //внутри аджакс запроса исп двойные ковычки
		},
		//имя функции в случае успеха if success
		ifSuccess

	);
}

function ifSuccess(data){
	$('#out').html(data);
}