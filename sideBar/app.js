var menuLine = document.getElementById("menuLine");
var sideBar = document.getElementById("sideBar");
var closeBtn = document.getElementById("closeBtn");
var device = document.getElementById("device");
var deviceList = document.getElementById("deviceList");
var Collection = document.getElementById("Collection");
menuLine.addEventListener("click", () => {
  sideBar.style.width = "250px";
});
closeBtn.addEventListener("click", () => {
  sideBar.style.width = "0px";
});
device.addEventListener("click", () => {
  deviceList.style.width = "250px";
  deviceList.style.display = "block";
});

Collection.addEventListener("click", () => {
  deviceList.style.width = "0px";
  deviceList.style.display = "none";
});
