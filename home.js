$(document).ready(function() {
    $("#tommyPic").click(function () { //goes to portfolio when card in clicked
        window.location.href = "Tommy/Tommy.html";
    });
    $("#tommyPic, #cliftonPic, #joePic").mouseover(function() { //changes mouse pointer to hand when hovered over card
        $(this).css('cursor', 'pointer');
    })

});