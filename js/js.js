//$(seçici).fonksiyon();
//dolar option + 4
$(document).ready(function(){

    $("#button1").click(function(){
        var isim= "İbrahim Cem";
        alert("Merhaba "+ isim);
    })
    $("#button2").click(function(){
        $("#magic").fadeToggle(2000);
    })
    $("#magic").click(function(){
        $(this).html("Cesaretliymişsin tebrik ederim. Yine beklerim :)");
        $(this).css("font-size", "+=40px");
        $(this).css("color", "red");
    });
});
