new WOW().init();
$(document).ready(function () {

    $("#staffLogIn").css("display", "none");
    $("#parentsLogIn").css("display", "none");
    $("#purpose").css("display", "none");
    $("#motivation").css("display", "none");
    $("#components").css("display", "none");
    $("#designProcess").css("display", "none");
    $("#technologies").css("display", "none");

});

$("#staffBtn").on('click', function () {

    $("#mainHeading").replaceWith(jQuery("#staffLogIn"));
    $("#staffLogIn").css("display", "");
});

$("#parentsBtn").on('click', function () {

    $("#mainHeading").replaceWith(jQuery("#parentsLogIn"));
    $("#parentsLogIn").css("display", "");
});

$("#aboutTab").on('click', function () {
    $("#mainHeading").replaceWith(jQuery("#purpose"));
    $("#purpose").css("display", "");
});

$("#next1").on('click', function () {
    $("#purpose").replaceWith(jQuery("#motivation"));
    $("#motivation").css("display", "");
});

$("#next2").on('click', function () {
    $("#motivation").replaceWith(jQuery("#components"));
    $("#components").css("display", "");
});

$("#next3").on('click', function () {
    $("#components").replaceWith(jQuery("#designProcess"));
    $("#designProcess").css("display", "");
});

$("#next4").on('click', function () {
    $("#designProcess").replaceWith(jQuery("#technologies"));
    $("#technologies").css("display", "");
});



