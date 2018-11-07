
$(document).ready(function(){

    $("#join").click(function(){
        PostergetHLML("/module/join.html");
    });

    $("#login").click(function(){
        PostergetHLML("/module/login.html");
    });

    function PostergetHLML(Link){
        $.ajax({
            type: "GET",
            url: Link,
            dataType:"html",
            success: function(response){
                $("#postUpdater").html(response);
            }
          });
    }

});