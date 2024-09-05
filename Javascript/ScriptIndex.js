function validate(callback){
    var name=document.getElementById('username');
    var pwd=document.getElementById('password');
    if(name.value=="admin" && pwd.value=='12345'){
        callback();
        return false;


}
    else {
        alert("Invalid username or password");
        return false;
    }
}

function redirect(){
    window.location.href = "main.html";

}
