new WOW().init();
$(document).ready(function () {

    $("#staffLogIn").css("display", "none");

});

$("#staffBtn").on('click', function(){

    $("#mainHeading").replaceWith(jQuery("#staffLogIn"));
    $("#staffLogIn").css("display", "");
});

