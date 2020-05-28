// HELP
function log(element, message) {
  console.log(`> [${element}] ${message}.`);
}

// APP
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

// Card functions
function dragStart() {
  // log("card", "Start dragging");
}
function drag() {
  // log("card", "Is dragging");
}
function dragEnd() {
  // log("card", "End dragging");
}

// Dropzone functions
function dragEnter() {
  log("dropzone", "A card entered here");
}
function dragOver() {
  log("dropzone", "A card passed by here");
}
function dragLeave() {
  log("dropzone", "A card left here");
}
function drop() {
  log("dropzone", "A card dropped here")
}

// Our cards
cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragEnd);
});

// Place where we will drop cards
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", drop);
});
