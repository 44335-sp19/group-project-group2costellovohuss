$(document).ready(function() {
    $("img").mouseover(function() {
        $(this).css('transform', 'scale(1.1)');
    });
     $("img").mouseout(function() {
        $(this).css('transform', 'scale(1)');
    });
});

