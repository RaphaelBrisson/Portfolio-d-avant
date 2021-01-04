/*temps que met l'ancre à arriver à destination*/

var speed = 500;

/*
SMOOTH ANCHOR FOR THE "MY WORK" HEADER'S BUTTON
*/
$(function() {

    $("a[href*='#my-work']").click(function() {
        $("*").removeClass('active');
        $("#02").addClass('active');
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, speed);
            }
        }
    });
});


/*
SMOOTH ANCHOR FOR THE LEFT NAVIGATION THING
*/

$(function() {

    $("a[href*='#header']").click(function() {
        $("*").removeClass('active');
        $("#01").addClass('active');
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, speed);
            }
        }
    });
});

$(function() {

    $("a[href*='#about']").click(function() {
        $("*").removeClass('active');
        $("#03").addClass('active');
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, speed);
            }
        }
    });
});

// $(function() {

//     $("a[href*='#my-skills-anchor']").click(function() {
//         $("*").removeClass('active');
//         $("#04").addClass('active');
//         if (
//             location.hostname == this.hostname
//             && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
//         ) {
//             var anchor = $(this.hash);
//             anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
//             if ( anchor.length ) {
//                 $("html, body").animate( { scrollTop: anchor.offset().top }, speed);
//             }
//         }
//     });
// });

$(function() {

    $("a[href*='#contact']").click(function() {
        $("*").removeClass('active');
        $("#04").addClass('active');
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, speed);
            }
        }
    });
});


