$(function() {
    start();
});

var start = function(){


	$(".title").css("height", window.innerHeight*0.4);
    $("#demo")
        .delay(100)
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
};