$(document).ready(function(){
	$('button').on('click', sendAjax)
	f2();
});

function sendAjax(){
	$.get(
		//послать куда?
		"goods.php",
		{
			"art": 1
		},
		function (data) {
			data = JSON.parse(data);
			console.log (data);
			alert(data.name);
		}
	);
}

function f2(){
	$.getJSON('file.json', function(data){
		console.log(data);
		for (var key in data) {
			var b = data[key];
			console.log(b.cost);
		} 
	});
}

