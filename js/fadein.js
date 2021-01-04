$(document).ready(function() {
    if ($(window).width() > 980)
    {
        /* Every time the window is scrolled ... */
        $(window).scroll( function(){
        
            /* Check the location of each desired element */

            $('.hide-me').each( function(i){
                if ( $(this).hasClass('hidden-work') && $('.hidden-work').css('display') == 'none' )
                {
                   //rien
                } 

                else 
                {
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 250){
                        
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                }
            }); 


            $('.hide-me-2').each( function(i){
                if ( $(this).hasClass('hidden-work') && $('.hidden-work').css('display') == 'none' )
                {
                   //rien
                } 
                
                else 
                {
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 250){
                        $(this).delay(250);
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                }
            }); 
        

            $('.hide-me-3').each( function(i){
                if ( $(this).hasClass('hidden-work') && $('.hidden-work').css('display') == 'none' )
                {
                   //rien
                } 
                
                else
                {
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 250 ){
                        $(this).delay(500);
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                }    
            });

            $('.hide-me-txt').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 0){
                        
                        $(this).animate({'opacity':'1'},500);
                    }
            }); 
            

            $('.hide-me-1s').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 400 ){
                        
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                    
                }); 
            

            $('.hide-me-2s').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 250 ){
                        
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                    
            }); 

            $('.hide-me-contact').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 300 ){
                        
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                    
            }); 


            $('.hide-me-end').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 125 ){
                        
                        $(this).animate({'opacity':'1'},500);
                        $(this).addClass('focus-in-expand');
                            
                    }
                    
            }); 

            $('h2').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 150 ){
                        $(this).css('opacity', '1');
                        $(this).css('transform','translateX(0px)');
                            
                    }
                    
            }); 

            $('#cv').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object ){
                        $(this).css('opacity', '1');
                        $('div a', this).css('transform','translateX(0px)');    
                    }
                    
            }); 

            $('#smiley1').each( function(i){
                
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object + 250){
                    
                    $(this).animate({'opacity':'0'},500);
                    $("#smiley2").animate({'opacity':'1'},500);
                        
                }
                
            }); 
        
        });

    }  

    else
    {
    /* Every time the window is scrolled ... */
        $(window).scroll( function(){
            
            if ($(window).width() > 480) {
                $('.text-hover').css("display", "none");
            }

            /* Check the location of each desired element */
            $('.hide-me, .hide-me-2, .hide-me-3').each( function(i){
                if ( $(this).hasClass('hidden-work') && $('.hidden-work').css('display') == 'none' )
                {
                   //rien
                } 
                else{

                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    if( bottom_of_window > bottom_of_object - 200){                    
                        $(this).animate({'opacity':'1'},500);     
                    }  

                    if ($(window).width() < 481)
                    {
                        if( bottom_of_window > bottom_of_object - 200){                     
                            $('img', this).css('opacity','1');
                            $('.text-hover', this).css('opacity','0');
                        }

                        if( bottom_of_window > bottom_of_object + 150){                    
                            $('img', this).css('opacity','0.15');
                            $('.text-hover', this).css('opacity','1');
                        }

                        if( bottom_of_window > bottom_of_object + 400){                    
                            $('img', this).css('opacity','1');
                            $('.text-hover', this).css('opacity','0');
                        }
                    }
                }                            
            }); 

            $('.hide-me-txt').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object + 100){
                        
                        $(this).animate({'opacity':'1'},500);
                    }
            }); 

            

            
            

            $('.hide-me-1s').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 500 ){
                        
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                    
                }); 
            

            $('.hide-me-2s').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 500 ){
                        
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                    
                }); 


            $('.hide-me-end').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 125 ){
                        
                        $(this).animate({'opacity':'1'},500);
                        $(this).addClass('focus-in-expand');
                            
                    }
                    
            }); 

            $('.hide-me-contact').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object - 200 ){
                        
                        $(this).animate({'opacity':'1'},500);
                            
                    }
                    
            }); 

            $('h2').each( function(i){
                    
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object - 150 ){
                    $(this).css('opacity', '1');
                    $(this).css('transform','translateX(0px)');
                        
                }
                
            }); 


            $('#cv').each( function(i){
                    
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    /* If the object is completely visible in the window, fade it it */
                    if( bottom_of_window > bottom_of_object ){
                        $(this).css('opacity', '1');
                        $('div a', this).css('transform','translateX(0px)');    
                    }
                    
            }); 
        
        });        
    }  
});