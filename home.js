$(document).ready(function() {
    $("#tommyPic").click(function () { //opens portfolio when card is clicked
        window.open("Tommy/index.html", '_blank');
    });
    $("#cliftonPic").click(function () { 
        window.open("CJ.html/Clifton.html", '_blank');
    });
    $("#joePic").click(function () { 
        window.open("Joe/joe.html", '_blank');
    });
    
    $("#tommyPic, #cliftonPic, #joePic").mouseover(function() { //When hovering over card,
        $(this).css('cursor', 'pointer'); //change mouse pointer to hand
        $(this).css('transform', 'scale(1.1)'); //expand the card
    });
    $("#tommyPic, #cliftonPic, #joePic").mouseout(function() { //When mouse off card,
        $(this).css('transform', 'scale(1)'); //reverts card back to normal size
    });

});

//Automatically update copyright year
var date = new Date();
var year = date.getFullYear();
var element = document.getElementById("copyrightDate");
element.innerHTML = "&copy;" + year + " Tommy Vo | Clifton Huss | Joe Costello";