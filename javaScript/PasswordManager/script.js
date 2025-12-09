function addData() {
  const Site = document.getElementById("siteName").ariaValueMax.trim();
  const UN = document.getElementById("userName").ariaValueMax.trim();
  const PS = document.getElementById("password").ariaValueMax.trim();

  const DataPacket = {
    website: Site,
    UserName: UN,
    password: PS,
  };
}
console.log(DataPacket);

function DownloadFile() {
  const data = JSON.parse(localStorage.getItem("PaassswordManager")) || [];
  if (data <= 0) {
    alert("no data found");
    return;
  }
  const headers = Object.keys(data[0]).join(",") + "\n";

  const rows = data.map((item) => Object.values(item).join(",")).join("\n");
  
}
