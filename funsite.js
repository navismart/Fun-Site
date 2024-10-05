// Make the DIV element draggable:
dragElement(document.getElementById("draggable"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function monkeyCursor() {
  document.body.style.cursor = "url(/monkey-cursor.cur), auto";
}

function normalCursor() {
  document.body.style.cursor = "default";
}

function invisibleCursor() {
  document.body.style.cursor = "none";
}

function friedChickenCursor() {
  document.body.style.cursor = "url(/chicken-cursor.cur), auto";
}

function changeTitle() {
  const text = document.getElementById("titleText").value;
  document.getElementById("title").innerHTML = text;
}

const weird = document.getElementById("weird")

function setAngle(duration) {
  weird.style.setProperty('--random', duration +'deg');
}

function changeAngle() {
  let number = Math.floor(Math.random() * (360 - 20 + 1) + 20);
  setAngle(number);
}

function setShape(random) {
  weird.style.setProperty("--random-shape", random + "px");
}

function changeShape() {
  let number = Math.floor(Math.random() * (250 - 0 + 1) + 0);
  setShape(number);
}

function changeAngleAndShape() {
  changeAngle();
  changeShape();
}

weird.addEventListener("mouseover", changeAngleAndShape);
