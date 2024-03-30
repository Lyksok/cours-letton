const menu = document.querySelector(".menu");

import data from "./data.json" with { type: "json" };

function hideBlock(block) {
  block.style.display = "none";
}

function start_LtoF() {
  console.log("Latvian to French");
  hideBlock(menu);
}
function start_FtoL() {
  console.log("French to Latvian");
  hideBlock(menu);
}

function start_Mix() {
  console.log("Mix");
  hideBlock(menu);
}
