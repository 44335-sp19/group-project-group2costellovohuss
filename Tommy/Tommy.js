$(document).ready(function() {
    $("#downAngle").click(function() { //scrolls to aboutMe on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 1000);
    });

    $("#downAngle").mouseover(function() { //changes mouse pointer to hand when hovered over button
        $(this).css('cursor', 'pointer');
    })

});