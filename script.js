
$( document ).ready(function() {
    start();
});

var start = function(){


	$(".title").css("height", window.innerHeight*0.27);
    $("#demo")
        .fadeIn()
        .on("click", function () {
            return window.location.href = "Major-clinical-event-chart/";
        });

    $("#usecase")
        .delay(600)
        .fadeIn()
        .on("click", function () {
            return window.location.href = "uc/Major-clinical-event-chart/";
        });

    $("#usecase_2")
        .delay(1200)
        .fadeIn()
        .on("click", function () {
            return window.location.href = "uc_2/Major-clinical-event-chart/";
        });

    $("#timeline")
        .delay(1800)
        .fadeIn()
        .on("click", function () {
            return window.location.href = "Nurse-shift-v2/";
        });
};