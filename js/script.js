// HELP
function log(element, message) {
  console.log(`> [${element}] ${message}.`);
}

// APP
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

// Card functions
function dragStart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  this.classList.add("is-dragging");
  // log("card", "Start dragging");
}
function drag() {
  // log("card", "Is dragging");
}
function dragEnd() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  this.classList.remove("is-dragging");
  // log("card", "End dragging");
}

// Dropzone functions
function dragEnter() {
  // log("dropzone", "A card entered here");
}
function dragOver() {
  // this = dropzone
  this.classList.add("over");

  // Get dragging card
  const cardBeingDragged = document.querySelector(".is-dragging");
  this.appendChild(cardBeingDragged);
  // log("dropzone", "A card passed by here");
}
function dragLeave() {
  this.classList.remove("over");
  // log("dropzone", "A card left here");
}
function drop() {
  this.classList.remove("over")
  // log("dropzone", "A card dropped here");
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
