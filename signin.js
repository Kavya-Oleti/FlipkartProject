// console.log("hello");
var getdatauser = JSON.parse(localStorage.getItem("datauser"));
function Signin() {
  var mobile = document.getElementById("mobile").value;
  var password = document.getElementById("password").value;
  // console.log(mobile,password);
  if(mobile.length==0){
    alert("enter your mobile number");
  }
  else if(mobile.length!=10){
    alert("mobile number must be 10 digits")
  }
  else if(password.length==0)
  {
    alert("enter your password")
  }
  else{
    for (let i = 0; i < getdatauser.length; i++) {
      if (mobile == getdatauser[i].mobile) {
        if (password == getdatauser[i].password) {
          alert("signin successfull");
          window.location.href = "index.html";
        } else {
          alert("invalid password");
        }
      }
      // else{
      //     alert("mobile number and password not registered")
      // }
    }
  }
  
  }
  