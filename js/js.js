//$("seçici").fonksiyon();
//dolar işareti = option + 4
$(document).ready(function(){

    $("#button1").click(function(){
        $(".animate").animate(
            {

                width: '400px',
                opacity: 0.5,

            },"slow" );
            $(".animate").animate(
                {
    
                    height: '400px',
                    opacity: 1,
    
                },"slow" );
           $(".animate").animate(
                {
                height: '200px',
                width: '200px',
                opacity: 1,
        
                },"slow" );
   
   
   
   
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
