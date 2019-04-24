$(document).ready(function() {
    $("#tommyPic").click(function () { //goes to portfolio when card in clicked
        window.location.href = "Tommy/Tommy.html";
    });
    $("#cliftonPic").click(function () { 
        window.location.href = "CJ.html/Clifton.html";
    });
    $("#joePic").click(function () { 
        window.location.href = "Joe/Joe.html";
    });
    
    $("#tommyPic, #cliftonPic, #joePic").mouseover(function() { //When hovering over card,
        $(this).css('cursor', 'pointer'); //change mouse pointer to hand
        $(this).css('transform', 'scale(1.1)'); //expand the card
    });
    $("#tommyPic, #cliftonPic, #joePic").mouseout(function() { //When mouse off card,
        $(this).css('transform', 'scale(1)'); //reverts card back to normal size
    });

});