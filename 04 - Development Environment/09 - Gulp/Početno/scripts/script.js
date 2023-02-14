$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "https://api.kanye.rest/",
            dataType: "json",
            success: function (data) {
                $("#quote").html(`Kanye said: ${data.quote}`);
            }
        });
    });
});