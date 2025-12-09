// Full position table (left%, top%) tuned for your tall map (1074x1307).
// Includes common aliases and simple misspellings so "kerela" won't fail.
var pos = {
  // STATES
  "jammu and kashmir": [51, 6],
  "jammu": [50, 7],
  "kashmir": [50, 6],
  "ladakh": [55, 3],

  "punjab": [30, 18],
  "himachal pradesh": [36, 14],
  "uttarakhand": [44, 18],

  "haryana": [36, 22],
  "chandigarh": [36, 20],
  "delhi": [44, 24],

  "rajasthan": [20, 30],
  "gujarat": [12, 46],
  "maharashtra": [36, 56],
  "goa": [25, 68],
  "dadra and nagar haveli": [22, 60],
  "daman and diu": [18, 50],

  "madhya pradesh": [36, 42],
  "chhattisgarh": [52, 51],

  "uttar pradesh": [52, 30],
  "bihar": [66, 30],
  "jharkhand": [62, 42],

  "west bengal": [78, 34],
  "sikkim": [76, 22],
  "odisha": [68, 50],

  // NORTH-EAST
  "assam": [85, 28],
  "meghalaya": [81, 32],
  "tripura": [83, 41],
  "manipur": [90, 34],
  "nagaland": [92, 28],
  "mizoram": [88, 44],
  "arunachal pradesh": [96, 17],

  // SOUTH
  "madhya pradesh": [36, 42],        // duplicate safe entry
  "karnataka": [42, 66],
  "maharashtra": [36, 56],           // safe duplicate
  "telangana": [50, 58],
  "andhra pradesh": [56, 64],
  "odisha": [68, 50],
  "tamil nadu": [52, 82],
  "kerala": [36, 80],
  "karnataka": [42, 66],
  "goa": [25, 68],
  "puducherry": [58, 84],

  // UNION TERRITORIES & ISLANDS
  "andaman and nicobar": [94, 94],
  "lakshadweep": [14, 84],

  // COMMON ALIASES / MISPELLINGS
  "kerela": [36, 80],
  "tn": [52, 82],
  "ap": [56, 64],
  "andhra": [56, 64],
  "up": [52, 30],
  "mp": [36, 42],
  "wb": [78, 34],
  "jk": [51, 6]
};

// clamp helper to keep flags inside map (2%..98%)
function clampPct(v) {
  if (typeof v !== 'number') return v;
  if (v < 2) return 2;
  if (v > 98) return 98;
  return v;
}

function placeFlag() {
  var nameRaw = document.getElementById("search").value;
  var name = String(nameRaw || "").toLowerCase().trim();

  if (!name) {
    alert("Please type a state name.");
    return;
  }

  // try exact or fallback with small normalization:
  // remove extra spaces, convert common punctuation, and run common synonyms.
  name = name.replace(/\s+/g, " "); // normalize spaces
  name = name.replace(/[-_\.]/g, " "); // replace punctuation

  // If still not found, try small variants (remove "state", "of")
  var nameAlt = name.replace(/\b(state|of)\b/g, "").trim();

  var finalName = name;
  if (!pos[finalName] && pos[nameAlt]) finalName = nameAlt;

  if (!pos[finalName]) {
    // try small fuzzy checks (aliases)
    // map abbreviations
    var aliasMap = {
      "tamilnadu":"tamil nadu",
      "tamilnad": "tamil nadu",
      "andaman":"andaman and nicobar",
      "andaman & nicobar":"andaman and nicobar",
      "andaman nicobar":"andaman and nicobar",
      "andhra":"andhra pradesh",
      "orissa":"odisha",
      "odisha":"odisha",
      "od": "odisha"
    };
    if (aliasMap[name]) finalName = aliasMap[name];
  }

  if (!pos[finalName]) {
    alert("State not found! Try full state name or check spelling.");
    return;
  }

  var coords = pos[finalName];
  var leftPct = clampPct(coords[0]);
  var topPct = clampPct(coords[1]);

  var map = document.getElementById("mapArea");

  var flag = document.createElement("div");
  flag.className = "flag-pin";
  flag.innerHTML = "🚩";   // you can replace with "<img src='flag.png' width='20'>" or use class 'dot' for dot

  // apply as percentages relative to image size
  flag.style.left = leftPct + "%";
  flag.style.top = topPct + "%";

  map.appendChild(flag);

  document.getElementById("search").value = "";
}

// remove all pins
function clearPins() {
  document.querySelectorAll(".flag-pin").forEach(pin => pin.remove());
}
