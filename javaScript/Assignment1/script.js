function calculateTip() {

  var bill = document.getElementById("bill").value;

  var service = document.getElementById("service").value;

  var people = document.getElementById("people").value;

  var result = document.getElementById("result");

  if (bill === "" || service == 0 || people === "" || people <= 0) {
    alert("Please fill all fields correctly");
    return; 
  }
  var tip = bill * service;

  var total = Number(bill) + tip;

  var perPerson = total / people;


  result.classList.remove("d-none");

  
  result.innerHTML = "Each person should pay ₹" + perPerson.toFixed(2);
}
