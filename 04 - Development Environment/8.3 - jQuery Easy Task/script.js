$(document).ready(function () {
    // Highlight element with id mark
    $("#mark").css("background", "yellow");

    $(".gone").click(function () {
        $(this).slideUp();
    });

    $("#dclick").dblclick(function () {
        $(this).slideUp();
    });

    $(".hide-btn").click(function () {
        $("p").hide();
    });

    // Show hidden paragraphs
    $(".show-btn").click(function () {
        $("p").show();
    });

    $(".toggle-btn").click(function () {
        $("p").fadeToggle();
    });

    $("#button-box").click(function () {
        $(".box").animate({
            width: "300px",
            height: "300px",
            marginLeft: "150px",
            borderWidth: "10px",
            opacity: 0.5
        });
    });

    $("#callback").click(function(){
        $(".gone").slideToggle("slow", function(){
            alert("The slide toggle effect has completed.");
        });
    });

});