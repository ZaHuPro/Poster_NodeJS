
$(document).ready(function(){

    console.log(navigator.platform);
    var origin   = window.location.origin;

    $(document).on('click', '#join' , function(){
        console.log("username : " + $("#inputUserName").val() + " << password : "+ $("#inputPassword").val() + " << email: "+ $("#inputEMali").val() + " << firstname: "+ $("#inputFirstName").val() + " << lastname:" + $("#inputLastName").val() + " << phone: " + $('#inputPhone').val());
            $.ajax({ 
                type: 'POST', 
                url: '/userAdd', 
                data: { 
                username : $("#inputUserName").val(),
                password : $("#inputPassword").val(),
                email: $("#inputEMali").val(),
                firstname: $("#inputFirstName").val(),
                lastname: $("#inputLastName").val(),
                phone: $("#inputPhone").val()
                }, 
                success: function (data) { 
                    console.log("User Add Success");
                    GoToPost(data.username);
                }
            })
    });


    $(document).on('click', '#login' , function(){
        console.log("username : " + $("#inputUserName").val() + " << password : "+ $("#inputPassword").val() + " << email: "+ $("#inputEMali").val() + " << firstname: "+ $("#inputFirstName").val() + " << lastname:" + $("#inputLastName").val() + " << phone: " + $('#inputPhone').val());
            $.ajax({ 
                type: 'POST', 
                url: '/userCheck', 
                data: { 
                username : $("#loginUserName").val(),
                password : $("#loginPassword").val(),
               
                }, 
                success: function (data) { 
                    if(data != null){
                       
                        console.log("Id is Correct");
                        GoToPost(data.username);
                        
                        
                    }else{
                        alert("Invalid username and password!");
                    }

                    
                }
            })


    });


    function GoToPost(userName){
        window.localStorage.setItem("user", userName );
        var goto = origin + "/post.html?user=" + userName;
        window.location.href = goto;
    }

    
});