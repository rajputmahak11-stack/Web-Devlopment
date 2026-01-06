function register() {
  var name = document.getElementById("fullname").value.trim();
  var emailVal = document.getElementById("email").value.trim();
  var mobileVal = document.getElementById("mobile").value.trim();
  var dobVal = document.getElementById("dob").value;

  var marksVal = document.getElementById("marks").value.trim();
  var cityVal = document.getElementById("city").value.trim();
  var pinVal = document.getElementById("pincode").value.trim();
  var gmobileVal = document.getElementById("gmobile").value.trim();

  var courseVal = document.getElementById("course").value;
  var batchVal = document.getElementById("batch").value;


  document.querySelectorAll("span").forEach(s => s.innerHTML = "");

  
  if (!/^[A-Za-z ]+$/.test(name)) {
    document.getElementById("nameError").innerHTML = "Invalid name";
    return;
  }


  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(emailVal)) {
    document.getElementById("emailError").innerHTML = "Invalid email";
    return;
  }

 
  if (!/^[6-9][0-9]{9}$/.test(mobileVal)) {
    document.getElementById("mobileError").innerHTML = "Invalid mobile number";
    return;
  }


  var age = new Date().getFullYear() - new Date(dobVal).getFullYear();
  if (age < 15) {
    document.getElementById("dobError").innerHTML = "Minimum age is 15";
    return;
  }


  if (!(/^([0-9]{1,2}|100)$/.test(marksVal) || /^[A-F]$/.test(marksVal))) {
    document.getElementById("marksError").innerHTML = "Invalid percentage or grade";
    return;
  }


  if (!/^[A-Za-z ]+$/.test(cityVal)) {
    document.getElementById("cityError").innerHTML = "Invalid city";
    return;
  }


  if (!/^[0-9]{6}$/.test(pinVal)) {
    document.getElementById("pinError").innerHTML = "Invalid pincode";
    return;
  }

  
  if (!/^[6-9][0-9]{9}$/.test(gmobileVal)) {
    document.getElementById("gmobileError").innerHTML = "Invalid guardian number";
    return;
  }

  if (courseVal === "") {
    document.getElementById("courseError").innerHTML = "Select a course";
    return;
  }


  if (batchVal === "") {
    document.getElementById("batchError").innerHTML = "Select a batch timing";
    return;
  }

  alert("Registration Successful");
}
