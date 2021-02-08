$(document).ready(function(){
    $('ul.tabs li a:first').addClass("active");
    $(".secciones article").hide();
    $(".secciones article:first").show();
     $("ul.tans li a").click(function(){
         $("ul.tabs li a").removeClass("active");
         $(this).addClass("active");
         var ativate = $(this).attr("href");
         $(ativate).show();
         return false;
     })
    
})
