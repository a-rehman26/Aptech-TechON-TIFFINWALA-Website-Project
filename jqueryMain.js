$(document).ready(function () {
    $("#navTopSearchicon").click(function () {
        $("#hideSearchDivMainForJquery").show(function () {
            $("#hideSearchDivMainForJquery").css("display", "block")
        })
    });

    $("#hidecloseDivMainForJquery").click(function () {
        $("#hideSearchDivMainForJquery").hide()(function () {
            $("#hideSearchDivMainForJquery").css("display", "none")
        })
    })
});
