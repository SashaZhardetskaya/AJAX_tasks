$(document).ready(function(){
	$('button').on('click', sendAjax)
});

function sendAjax(){
	$.post(
		//послать куда?
		"rand.php",
		{
			"a": $('#num1').val(), //внутри аджакс запроса исп двойные ковычки
			"b": $('#num2').val()
		},
		//имя функции в случае успеха if success
		ifSuccess

	);
}

function ifSuccess(data){
	$('#out').html(data);
}