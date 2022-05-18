$(function () {
    $('button:nth-of-type(1)').click(function () {
        $("#chair1").fadeIn();
        $("#chair2").hide();
        $("#chair3").hide();
    });


    $('button:nth-of-type(2)').click(function () {
        $("#chair2").fadeIn();
        $("#chair1").hide();
        $("#chair3").hide();
    });


    $('button:nth-of-type(3)').click(function () {
        $("#chair3").fadeIn();
        $("#chair1").hide();
        $("#chair2").hide();
    });

    $(document).ready(function(){
        var currentPosition = parseInt($(".quickmenu").css("top"));
        $(window).scroll(function(){
        var position = $(window).scrollTop();
        $(".quickmenu").stop().animate({"top":position+currentPosition+"px"},500);
    });
 });    

});