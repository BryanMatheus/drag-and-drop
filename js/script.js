// HELP
function log(element, message) {
  console.log(`> [${element}] ${message}.`);
}

// APP
const cards = document.querySelectorAll(".card");

function dragStart() {
  log("card", "Start dragging");
}
function drag() {
  log("card", "Is dragging");
}
function dragEnd() {
  log("card", "End dragging");
}

cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragEnd);
});
