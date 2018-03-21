$("document").ready(function() {
	var database = firebase.database();

	var refRed = database.ref('counters/red/count');
	refRed.on('value', function(snapshot) {
		$('#c1').html(snapshot.val());
	});

	var refGreen = database.ref('counters/green/count');
	refGreen.on('value', function(snapshot) {
		$('#c2').html(snapshot.val());
	});

	var refYellow = database.ref('counters/yellow/count');
	refYellow.on('value', function(snapshot) {
		$('#c3').html(snapshot.val());
	});

	var refBlue = database.ref('counters/blue/count');
	refBlue.on('value', function(snapshot) {
		$('#c4').html(snapshot.val());
	});
	
});