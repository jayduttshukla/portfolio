function loginvalidation(){
    var username,password;
    username=document.getElementById("username").value;
    password=document.getElementById("pass").value;
    
    if(username=="admin" && password=="admin"){
        document.write("Welcome Admin!");
        //window.location="http://www.google.com";
    }
    
    
    else{
        alert("Enter valid Username/Password !");
    }
    
}
