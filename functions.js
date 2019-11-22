///toggle pollution div on click
var i = 0
function toggleDiv () {
    switch(i) {
        case 0:
            $('#pollution-1').css('visibility','hidden');
            $('#pollution-2').css('visibility','visible');
            i++;
            break;
        case 1:
            $('#pollution-2').css('visibility','hidden');
            $('#pollution-3').css('visibility','visible');
            i++;
            break;
        case 2:
            $('#pollution-3').css('visibility','hidden');
            $('#pollution-1').css('visibility','visible');
            i = 0;
            break;
        default:
    }  
}

//a function that make internal links scrolling smoother
function scrollToElement (selector) {
    $('html, body').animate({
      scrollTop: $(selector).offset().top-70      //70px is the sticky nav height
    }, 1000);       
};  
$(document).on('click', 'a.tab', function () {
    scrollToElement($(this).attr('href'));
});

//function to replace text with a heart on hover
$("#donate").on({
    mouseenter: function () {
        $(this).empty().append("<i class='fa fa-heart heart-2 heart' aria-hidden='true'></i>")
    },
    mouseleave: function () {
        $(this).empty().append("Donate");
    }
});