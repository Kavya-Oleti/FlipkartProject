function Signup() {
  var mobile = document.getElementById("mobile").value;
  var username = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  // console.log(mobile.value,username.value,password.value);
  var getdatauser = JSON.parse(localStorage.getItem("datauser"));
  if (mobile.length == 0) {
    alert("mobile number should not be empty");
  } else if (mobile.length != 10) {
    alert("mobile number should be 10 digits");
  } else {
    var userData = {
      mobile: mobile,
      username: username,
      password: password,
    };
    let userarr = [...getdatauser, userData];
    // userarr.push(userData);
    // console.log(userarr);
    //to store the data in localstorage we use setitem
    //json.stringify is used to convert object into string
    localStorage.setItem("datauser", JSON.stringify(userarr));
    alert("signup successfully completed");
    window.location.href = "./signin.html";
    //to retrive the data from localstorage and parse it back to an object
    // var storeddatauser = JSON.parse(localStorage.getItem("datauser"));
    // console.log(storeddatauser);
  }
}
