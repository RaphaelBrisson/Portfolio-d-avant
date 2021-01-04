//fleche vers le bas du header
$("#d-arrow-o").mouseover(function() {
	$("#d-arrow").css('transform', 'scale(1.1)');
	$("#d-arrow-o").css('transform', 'scale(1.1)');
	$("#d-arrow").animate( { opacity: 0 }, 200);
	$("#d-arrow-o").animate( { opacity: 1 }, 200);
});

$("#d-arrow-o").mouseout(function() {
	$("#d-arrow").css('transform', 'none');
	$("#d-arrow-o").css('transform', 'none');
	$("#d-arrow").animate( { opacity: 1 }, 200);
	$("#d-arrow-o").animate( { opacity: 0 }, 200);
});


//quand on clique sur "voir plus"
$("#more").click(function() {
	$(this).css('color', 'white');
	$(".hidden-work").css('display', 'block');
	$(".hidden1").animate({'opacity':'1'},500);
	$(".hidden2").delay(250);
	$(".hidden2").animate({'opacity':'1'},500);
	$(".hidden3").delay(500);
	$(".hidden3").animate({'opacity':'1'},500);
});