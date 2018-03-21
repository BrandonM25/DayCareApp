new WOW().init();
$(document).ready(function () {

    $("#staffLogIn").css("display", "none");
    $("#parentsLogIn").css("display", "none");

});

$("#staffBtn").on('click', function(){

    $("#mainHeading").replaceWith(jQuery("#staffLogIn"));
    $("#staffLogIn").css("display", "");
});

$("#parentsBtn").on('click', function(){

    $("#mainHeading").replaceWith(jQuery("#parentsLogIn"));
    $("#parentsLogIn").css("display", "");
});

