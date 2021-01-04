$("#01").mouseover(function() {
	$("#nav-p1").text('Header');
	$("#nav-p1").removeClass('text-opacity-out');
	$("#nav-p1").addClass('text-opacity');

});

$("#01").mouseout(function() {
	
	$("#nav-p1").removeClass('text-opacity');
	$("#nav-p1").addClass('text-opacity-out');
	$("#nav-p1").text('');
});



$("#02").mouseover(function() {
	$("#nav-p2").text('Mes Réalisations');
	$("#nav-p2").removeClass('text-opacity-out');
	$("#nav-p2").addClass('text-opacity');
});

$("#02").mouseout(function() {
	$("#nav-p2").removeClass('text-opacity');
	$("#nav-p2").addClass('text-opacity-out');
	$("#nav-p2").text('');
});



$("#03").mouseover(function() {
	$("#nav-p3").text('À Propos');
	$("#nav-p3").removeClass('text-opacity-out');
	$("#nav-p3").addClass('text-opacity');
});

$("#03").mouseout(function() {
	$("#nav-p3").removeClass('text-opacity');
	$("#nav-p3").addClass('text-opacity-out');
	$("#nav-p3").text('');
});



// $("#04").mouseover(function() {
// 	$("#nav-p4").text('Mes Compétences');
// 	$("#nav-p4").removeClass('text-opacity-out');
// 	$("#nav-p4").addClass('text-opacity');
// });

// $("#04").mouseout(function() {
// 	$("#nav-p4").removeClass('text-opacity');
// 	$("#nav-p4").addClass('text-opacity-out');
// 	$("#nav-p4").text('');
// });



$("#04").mouseover(function() {
	$("#nav-p4").text('Contact');
	$("#nav-p4").removeClass('text-opacity-out');
	$("#nav-p4").addClass('text-opacity');
});

$("#04").mouseout(function() {
	$("#nav-p4").removeClass('text-opacity');
	$("#nav-p4").addClass('text-opacity-out');
	$("#nav-p4").text('');
});


