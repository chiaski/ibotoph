
//Background changing


$(function () {
    
$('.person-colmenares').hover(function(){
    console.log("Run!");
    
    
    $(".container-back").css('background-image', 'url('+"img/kandidato/colmenares-alt.jpg"+')');
    
    //$('.container-back').hide().css('background-image', 'url("img/kandidato/colmenares-alt.jpg")').fadeIn("fast");
})
    
$('.person-diokno').hover(function(){
    console.log("Run!");
    
    $(".container-back").css('background-image', 'url('+"img/kandidato/diokno.png"+')');
    
    //$('.container-back').hide().css('background-image', 'url("img/kandidato/diokno.png")').fadeIn("fast");
})
    
    
$('.person-leody').hover(function(){
    console.log("Run!");
    
    $(".container-back").css('background-image', 'url('+"img/kandidato/leody.png"+')');
   // $('.container-back').hide().css('background-image', 'url("img/kandidato/leody.png")').fadeIn("fast");
})
    
$('.person-hilbay').hover(function(){
    console.log("Run!");
    
    $(".container-back").css('background-image', 'url('+"img/kandidato/hilbay.png"+')');
    
    //$('.container-back').hide().css('background-image', 'url("img/kandidato/hilbay.png")').fadeIn("fast");
})

$('.person-tanada').hover(function(){
    console.log("Run!");
    
    $(".container-back").css('background-image', 'url('+"img/kandidato/tanada.png"+')');
    
 //   $('.container-back').hide().css('background-image', 'url("img/kandidato/tanada.png")').fadeIn("fast");
})

$('.person-gutoc').hover(function(){
    console.log("Run!");
    
    $(".container-back").css('background-image', 'url('+"img/kandidato/gutoc.png"+')');
    
    //$('.container-back').hide().css('background-image', 'url("img/kandidato/gutoc.png")').fadeIn("fast");
})




});
    
    

$(function () {
    $('.tooltip').tooltip({
        open: function () {
            // make sure all other tooltips are closed when opening a new one
            $('.tooltip').not(this).tooltip('close');
        }
    }).on('mouseleave', function (e) {
        var that = this;
        // close the tooltip later (maybe ...)
        mouseLeaveTimer = setTimeout(function () {
            $(that).tooltip('close');
        }, 100);
        // prevent tooltip widget to close the tooltip now
        e.stopImmediatePropagation();
    });

    $(document).on('mouseenter', '.ui-tooltip', function (e) {
        // cancel tooltip closing on hover
        clearTimeout(mouseLeaveTimer);
    });
    $(document).on('mouseleave', '.ui-tooltip', function () {
        // make sure tooltip is closed when the mouse is gone
        $('.tooltip').tooltip('close');
    });
});



// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body, .container').animate({
                    scrollTop: target.position().top - 100
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
