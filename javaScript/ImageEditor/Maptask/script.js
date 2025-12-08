var pos = {
 
  "gujarat": [18, 45],
  "rajasthan": [25, 30],
  "maharashtra": [40, 58],
  "goa": [35, 70],
  "punjab": [23, 22],
  "haryana": [30, 25],
  "delhi": [33, 27],
  "jammu": [28, 10],
  "kashmir": [30, 12],
  "jammu and kashmir": [30, 12],
  "ladakh": [40, 5],
  "himachal pradesh": [35, 20],
  "uttarakhand": [40, 24],
  "mp": [43, 45],
  "madhya pradesh": [43, 45],
  "chhattisgarh": [55, 50],
  "bihar": [68, 30],
  "jharkhand": [65, 42],
  "west bengal": [79, 40],
  "odisha": [72, 55],
  "karnataka": [42, 72],
  "tamil nadu": [55, 82],
  "kerala": [38, 85],
  "andhra pradesh": [55, 70],
  "telangana": [50, 63],
  "assam": [85, 27],
  "arunachal pradesh": [90, 18],
  "nagaland": [92, 25],
  "manipur": [90, 35],
  "mizoram": [88, 45],
  "tripura": [84, 45],
  "meghalaya": [82, 32],
  "sikkim": [78, 25],

  // UNION TERRITORIES
  "andaman and nicobar": [90, 95],
  "lakshadweep": [20, 90],
  "puducherry": [58, 86],
  "chandigarh": [30, 22],
  "dadra and nagar haveli": [24, 60],
  "daman and diu": [22, 50]
};


function placeFlag() {
  var name = document.getElementById("search").value.toLowerCase();

  if (!pos[name]) {
    alert("State nahi mila!");
    return;
  }

  var map = document.getElementById("mapArea");
  var flag = document.createElement("div");
  flag.className = "flag-pin";
  flag.innerHTML = "$";

  flag.style.left = pos[name][0] + "%";
  flag.style.top = pos[name][1] + "%";

  map.appendChild(flag);

  document.getElementById("search").value = "";
}

function clearPins() {
  document.querySelectorAll(".flag-pin").forEach(pin => pin.remove());
}

