$(document).ready(function() {
    $("#tommyPic").click(function () { //goes to portfolio when card in clicked
        window.location.href = "Tommy/Tommy.html";
    });
    $("#joePic").click(function () { 
        window.location.href = "Joe/Joe.html";
        });
    $("#tommyPic, #cliftonPic, #joePic").mouseover(function() {
        $(this).css('cursor', 'pointer'); //changes mouse pointer to hand when hovered over card
        $(this).css('transform', 'scale(1.1)'); //expands the card on hover
    });
    $("#tommyPic, #cliftonPic, #joePic").mouseout(function() {
        $(this).css('transform', 'scale(1)'); //reverts to normal size when mouse off
    });

});