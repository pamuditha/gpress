var colors = ['red', 'green', 'yellow', 'blue'];
var back_colors = ['#db3236', '#3cba54', '#f4c20d', '#4885ed'];
$("document").ready(function() {
	var col = parseInt(Math.random() * 100) % 4;
	$(".taparea").css('background-color', back_colors[col]);

	
	$(".taparea").click(function(){
		var db = firebase.database();
		var ref = db.ref('counters/'+ colors[col] +'/count').once('value').then(function(snap) {
			db.ref('counters/'+ colors[col] +'/count').set(snap.val() + 1);
		});
	});
});