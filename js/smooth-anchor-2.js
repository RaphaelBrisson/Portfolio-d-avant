$(document).ready(function() {
    	$('#header').each( function(i){
            
        var pos_anchor = $('#header').position();
        var pos_window = $(window).scrollTop();

		if (pos_window > pos_anchor.top - 20) 
			{
				$("*").removeClass('active');
				$("#01").addClass('active');
			}
            
        }); 

        $('#header').each( function(i){
            
        var pos_anchor = $('#my-work').position();
        var pos_window = $(window).scrollTop();

		if (pos_window > pos_anchor.top - 20) 
			{
				$("*").removeClass('active');
				$("#02").addClass('active');
			}
            
        }); 

        $('#header').each( function(i){
            
        var pos_anchor = $('#about').position();
        var pos_window = $(window).scrollTop();

		if (pos_window > pos_anchor.top - 20) 
			{
				$("*").removeClass('active');
				$("#03").addClass('active');
			}
        }); 

  //       $('#header').each( function(i){
            
  //       var pos_anchor = $('#my-skills-anchor').position();
  //       var pos_window = $(window).scrollTop();

		// if (pos_window > pos_anchor.top - 20) 
		// 	{
		// 		$("*").removeClass('active');
		// 		$("#04").addClass('active');
		// 	} 
  //       }); 

        $('#header').each( function(i){
            
        var pos_anchor = $('#contact').position();
        var pos_window = $(window).scrollTop();

		if (pos_window > pos_anchor.top - 20) 
			{
				$("*").removeClass('active');
				$("#04").addClass('active');
			}
        });    

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
	
    	$('#header').each( function(i){
            
        var pos_anchor = $('#header').position();
        var pos_window = $(window).scrollTop();

		if (pos_window > pos_anchor.top - 20) 
			{
				$("*").removeClass('active');
				$("#01").addClass('active');
			}
        }); 

        $('#header').each( function(i){
            
        var pos_anchor = $('#my-work').position();
        var pos_window = $(window).scrollTop();

		if (pos_window > pos_anchor.top - 20) 
			{
				$("*").removeClass('active');
				$("#02").addClass('active');
			}
        }); 

        $('#header').each( function(i){
            
        var pos_anchor = $('#about').position();
        var pos_window = $(window).scrollTop();

		if (pos_window > pos_anchor.top - 20) 
			{
				$("*").removeClass('active');
				$("#03").addClass('active');
			}
        }); 

  //       $('#header').each( function(i){
            
  //       var pos_anchor = $('#my-skills-anchor').position();
  //       var pos_window = $(window).scrollTop();

		// if (pos_window > pos_anchor.top - 20) 
		// 	{
		// 		$("*").removeClass('active');
		// 		$("#04").addClass('active');
		// 	}
  //       }); 

        $('#header').each( function(i){
            
        var pos_anchor = $('#contact').position();
        var pos_window = $(window).scrollTop();

		if (pos_window > pos_anchor.top - 20) 
			{
				$("*").removeClass('active');
				$("#04").addClass('active');
			}
        }); 
    });
    
});

