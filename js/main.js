$(document).ready(function() {
  $(".range-slider").on("input change", function (){
    $(".text").css("font-size",$(this).val()+'px');
    $(".value").text($(".range-slider").val()+'px');
    console.log($(".range-slider").val());
  });
});