// Basic state positions on the map (x%, y%)
const states = {
  "Gujarat": [22, 48],
  "Maharashtra": [40, 55],
  "Rajasthan": [25, 35],
  "Karnataka": [50, 65],
  "Tamil Nadu": [60, 82],
  "Kerala": [45, 85],
  "West Bengal": [78, 40],
  "Uttar Pradesh": [55, 30]
};

// Fill list with states
let stateList = document.getElementById("stateList");

for (let state in states) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = state;

  li.onclick = function () {
    showMarker(state);
  };

  stateList.appendChild(li);
}

// Show marker on map
function showMarker(stateName) {
  let pos = states[stateName];

  let marker = document.getElementById("marker");
  marker.style.left = pos[0] + "%";
  marker.style.top = pos[1] + "%";
  marker.style.display = "block";

  highlightItem(stateName);
}

// Highlight selected list item
function highlightItem(stateName) {
  let allItems = document.querySelectorAll(".list-group-item");

  allItems.forEach(item => {
    if (item.textContent === stateName) {
      item.classList.add("active-item");
    } else {
      item.classList.remove("active-item");
    }
  });
}

// Search filter
document.getElementById("searchBox").oninput = function () {
  let search = this.value.toLowerCase();
  let items = document.querySelectorAll(".list-group-item");

  items.forEach(item => {
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(search) ? "block" : "none";
  });
};
