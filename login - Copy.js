function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email== email && password== password){
        window.location.assign("home");
        alert("Login Successfully");
    }
    else{
        alert("Invalid Information");
        return;
    }
}

function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
}