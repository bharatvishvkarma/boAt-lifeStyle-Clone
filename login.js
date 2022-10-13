function displayData(){
    var keep = document.querySelector(".curser")
    keep.style.display = "grid";
    keep.style.background = "white";
    document.querySelector(".mouse").addEventListener("mouseleave",removeData)
  }
  document.querySelector(".mouse").addEventListener("mouseover",displayData)
  
  function removeData(){
    var keep = document.querySelector(".curser")
    keep.style.display = "none";
  }
  document.querySelector(".mouse").addEventListener("mouseleave",removeData)

  document.querySelector("form").addEventListener("submit", loginfun);

let userData=JSON.parse(localStorage.getItem("userobj")) || []

function loginfun(){
    event.preventDefault();
    let email= document.getElementById("email").value
    let password =document.getElementById("password").value
    let validuser=false
    let usernotallowed =false

    userData.forEach(function(el) {
        if(el.email==email && el.password==password){
            validuser=true;
        }
        else if(el.email==email){
            usernotallowed=true
            return;
        }
    });
    if(validuser){
        alert("Login successfully")
        location.href=""
    }
    else if(usernotallowed){
        alert("Incorrect email or password.")
        document.getElementById("email").value=""
        document.getElementById("password").value=""
    }
    else{
        alert("Please Register Your Account")
        location.href="signup.html"
    }

}
