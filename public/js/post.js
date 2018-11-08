$(document).ready(function(){

    var pathname = window.location.pathname; // Returns path only
    var url      =  new URL(window.location.href);   // Returns full URL
    var origin   = window.location.origin;   // Returns base URL


    var userLocalStorage = localStorage.getItem("user");
    var userURLParams = url.searchParams.get("user");
    
    if(userLocalStorage == userURLParams){
        console.log("Matching")
        getDataByUserName(userLocalStorage);
    }else{
        console.log("Not found")
    }



    
    $(document).on('click', '#post' , function(){
        console.log("username : " +$("#userName").text() + " << Title : "+ $("#inputTitle").val() + " << Msg: "+ $("#inputMessage").val() + " << tag: "+ $("#inputTag").val());
            $.ajax({ 
                type: 'POST', 
                url: '/postAdd', 
                data: { 
                    username: $("#userName").text(),
                    title: $("#inputTitle").val(),
                    content: $("#inputMessage").val(),
                    tag: $("#inputTag").val()
                }, 
                success: function (data) { 
                    console.log("Post Success");
                    console.log(data);
                    GetAllPost();
                    $("#postCard").html("")
                }
            })
    });


    function PostAdder(Input){
        var PosterHTML;
        PosterHTML = "<div class='card text-white bg-dark mb-3' >";
        PosterHTML += "<div class='card-body'>";
        PosterHTML += "<h5 class='card-title'>"+ Input.title +"</h5>";
        PosterHTML += "<h6 class='card-subtitle mb-2 text-muted'>" + Input.username + "</h6>";
        PosterHTML += "<p class='card-text'>" + Input.content + "</p>";
        PosterHTML += "<p>Tag : " + Input.tag + "</p>";
        PosterHTML += "</div></div>";

        var TempPost = $("#postCard").html();
        TempPost += PosterHTML;
        $("#postCard").html(TempPost)
    }



    GetAllPost();
    function GetAllPost(){
        $.getJSON( "/postList", function( data ) {
            for(var i=data.length-1;i>=0;i--){
                PostAdder(data[i]);
                console.log(data[i]);
            }
        });
    }

    function getDataByUserName(inputUserName){
        $.ajax({ 
            type: 'POST', 
            url: '/userData', 
            data: { 
            username : inputUserName
            }, 
            success: function (data) { 
                if(data != null){
                    $("#userName").text(data.username);
                    $("#useremail").text(data.email);
                    $("#fullname").text(data.firstname + " " + data.lastname);
                    $("#userphone").text(data.phone);

                    // $("#profile").removeClass("disabled")
                    $("#logout").removeClass("disabled")
                    
                }else{
                    alert("Invalid username and password!");
                }

                
            }
        })
    }
});