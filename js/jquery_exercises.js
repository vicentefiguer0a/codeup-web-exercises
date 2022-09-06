"use strict";
// jQUERY INTRODUCTION EXERCISE BELOW
// $(function() {
//     alert("DOM has finished loading.");
// });


// jQUERY SELECTORS EXERCISE BELOW
// const mainHeading = $("#main-heading").html();
// alert(mainHeading);
//
// const subArticle = $("#sub-article").html();
// alert(subArticle);
//
// $(".codeup").css("border", "1px solid red");
//
// $("li").css("font-size", "20px");
//
// $("h1").css("background", "yellow");
// $("p").css("background", "yellow");
// $("li").css("background", "yellow");
//
// alert($(h1).html());
//
// $("h1, p, li");


// jQUERY MOUSE EVENTS EXERCISE BELOW
$("h1").click(function(e) {
    $(this).css("background-color", "skyblue");
});

$("p").dblclick(function(e) {
    $(this).css("font-size", "18px");
})

$("li").hover(
    function(e) {
        $(this).css("background-color", "red");
    },
    function(e) {
        $(this).css("background-color", "black"); // "value_function" can be set to "transparent" or "none" for no background color on hover out.
    }
);