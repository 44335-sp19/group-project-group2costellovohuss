$(document).ready(function() {
    $("#downAngle").click(function() { //scrolls to aboutMe on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 1000);
    });

    $("#downAngle, .navAboutMe, .navExperience, .navAwards, .navContact, #navHamburger").mouseover(function() { //changes mouse cursor to pointer on hover
        $(this).css('cursor', 'pointer');
    });
    
    $(".navAboutMe").click(function() { //scrolls to About Me on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
            }, 900);
    });
    $(".navExperience").click(function() { //scrolls to Work Experience on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
            }, 900);
    });
    $(".navAwards").click(function() { //scrolls to Work Experience on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#awards").offset().top
            }, 900);
    });
    $(".navContact").click(function() { //scrolls to Contact on click. Animate smooth scroll
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
            }, 900);
    });
    
    $(".dropdown").click(function() { //Toggle visibility of dropdown menu in mobile
        $(".navList").toggle();
    });
    
}); //End jQuery

//Javascript ---------------------------------------------------
// Execute scrollFunction on scroll 
window.onscroll = function() {
    scrollFunction()
};

var navbar = document.getElementById("navbar");
var topOffset = navbar.offsetTop;

// Add sticky class to navbar when you reach its scroll position. Remove sticky class once you leave the scroll position
function scrollFunction() {
    if (window.pageYOffset >= topOffset) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}