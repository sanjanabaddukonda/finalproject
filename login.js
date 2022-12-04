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