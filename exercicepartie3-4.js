document.getElementById("button").addEventListener("click",function(){
 if(password.value == confirmPassword.value){
   password.style.border = "3px solid green";
   confirmPassword.style.border = "3px solid green";
 }
 else{
   password.style.border = "3px solid red";
   confirmPassword.style.border = "3px solid red";
 }
})
