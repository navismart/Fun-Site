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
  document.body.style.cursor =
    "url('data:image/x-icon;base64,AAACAAEAICAQAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAIAAAAAAAAAAAAAEAAAAAAAAAAAAAAAM5nMAJnM/wBmmcwAzMz/AJmZmQAAM5kAADNmAGZmZgCZZv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIhiIgAAAAAAAAAAAAiEABhEYhQgHdndwAAAAAAISCABmaIUAAABmcAAAAAAxEggAZgiIUAAAB2cAAAAAAGIIAAAgAIAAAAB2AAAAAAAgAAAABmBwAAAAdnAAAAAAAAAHd3BmcAAAAHZgAAAAAAAAAAAAAAAAAAd2YAAAAAAAAHZmZmdwAAAHdgAAAAAABhESIiIhZ3ABEQAAAAAAAAEiIiIiIhdwFEIQAAAAAAACJERESZImcSERIQAAAAAAAkQhERmSJnJ0IiEAAAAAFgmXESIgIiZ0cSFBAAAAABYJIHIkICImcnYUQQAAAAAmcSIEREIiJnIRJBEAAAAAQmAiJEQiIiZxR3EhAAAAAAEgEiERERFmdwEREAAAAAAAEGEWZmZmZmdwAAAAAAAAAAAGZmZmZmZ3cAAAAAAAAAAAB2ZmZmZnd3AAAAAAAAAAAAB3d3d3d3AAAAAAAAAAAAAAB3dmd3AAAAAAAAAAAAAAAAAAZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////4A///CAAP/gAEA/4ABgH8AALg/AAC8PwIAfB/PAPwf/gD4H/gAeD/wAAB/4AAAf+AAAD/AAAA/AAAAPwAAAD8AAAA/AAAAP4AAAP+AAAD/4AAH//gAD//8AB///gA//f8A//z/w//9f////D////w=='), auto";
}

function normalCursor() {
  document.body.style.cursor = "default";
}

function invisibleCursor() {
  document.body.style.cursor = "none";
}

function friedChickenCursor() {
  document.body.style.cursor =
    "url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAACAAAABQAAAAQAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAGAAAACQAAAAsAAAARAAAADwAAAAsAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAEAAAADAAAADAAAABUAAAAeAAAAHwAAACkAAAAkAAAAGwAAAA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////+////4H///8A///gAP/gAAB4AAAAeAAAAPgAAAPwAAAP4AAAH+AAAH/gAAH/4AAH/+AAD//wAB//8AA///gAf//8AP///gP//////////////////////////////////8='), auto";
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

function resetTitle() {
  document.getElementById("title").innerHTML = "navismart.github.io/Fun-Site";
}

weird.addEventListener("mouseover", change);

// script.js

const locked = [false, false, false, false, false]; // Track locked state

// Function to generate a random hex color
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Function to apply colors to the palette
function generatePalette() {
  for (let i = 1; i <= 5; i++) {
    if (!locked[i - 1]) {
      const colorBox = document.getElementById(`color${i}`);
      const colorCode = document.getElementById(`code${i}`);
      const randomColor = getRandomColor();
      
      colorBox.style.backgroundColor = randomColor;
      colorCode.textContent = randomColor;
    }
  }
}

// Function to copy color to clipboard
function copyToClipboard(index) {
  const colorCode = document.getElementById(`code${index}`).textContent;
  navigator.clipboard.writeText(colorCode).then(() => {
    alert(`Copied ${colorCode} to clipboard!`);
  });
}

// Function to toggle lock
function toggleLock(index) {
  const lockButton = document.querySelector(`.lock-btn[data-index="${index}"]`);
  locked[index - 1] = !locked[index - 1];
  lockButton.textContent = locked[index - 1] ? '🔒' : '🔓';
  lockButton.classList.toggle('locked', locked[index - 1]);
}

// Function to save the current palette
function savePalette() {
  const currentPalette = [];
  for (let i = 1; i <= 5; i++) {
    const colorCode = document.getElementById(`code${i}`).textContent;
    currentPalette.push(colorCode);
  }

  const savedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
  savedPalettes.push(currentPalette);
  localStorage.setItem('palettes', JSON.stringify(savedPalettes));
  displaySavedPalettes();
  alert('Palette saved!');
}

// Function to delete a palette
function deletePalette(index) {
  const savedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
  savedPalettes.splice(index, 1);
  localStorage.setItem('palettes', JSON.stringify(savedPalettes));
  displaySavedPalettes();
}

// Function to load a saved palette
function loadPalette(index) {
  const savedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
  const palette = savedPalettes[index];
  
  for (let i = 0; i < palette.length; i++) {
    const colorBox = document.getElementById(`color${i + 1}`);
    const colorCode = document.getElementById(`code${i + 1}`);
    colorBox.style.backgroundColor = palette[i];
    colorCode.textContent = palette[i];
  }
}

// Function to display saved palettes
function displaySavedPalettes() {
  const savedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
  const savedContainer = document.getElementById('saved-palettes');
  savedContainer.innerHTML = '';

  savedPalettes.forEach((palette, index) => {
    const paletteDiv = document.createElement('div');
    paletteDiv.className = 'saved-palette';

    const colorsContainer = document.createElement('div');
    colorsContainer.className = 'colors-container';
    colorsContainer.innerHTML = palette.map(color =>
      `<div class="saved-color" style="background-color: ${color};"></div>`).join('');

    const deleteButton = `<button class="delete-btn" data-index="${index}">Delete</button>`;
    const loadButton = `<button class="load-btn" data-index="${index}">Load</button>`;

    paletteDiv.appendChild(colorsContainer);
    paletteDiv.innerHTML += `${deleteButton} ${loadButton}`;
    savedContainer.appendChild(paletteDiv);
  });

  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      deletePalette(index);
    });
  });

  document.querySelectorAll('.load-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      loadPalette(index);
    });
  });
}

// Add event listeners
document.getElementById('generate-btn').addEventListener('click', generatePalette);
document.getElementById('save-btn').addEventListener('click', savePalette);
document.querySelectorAll('.color-box').forEach(box => {
  box.addEventListener('click', () => {
    const index = box.getAttribute('data-index');
    copyToClipboard(index);
  });
});
document.querySelectorAll('.lock-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const index = button.getAttribute('data-index');
    toggleLock(index);
  });
});

// Load saved palettes on page load
displaySavedPalettes();
generatePalette();

function setBackgroundColor(random) {
  weird.style.setProperty("--random-bg", random);
}

function changeBackgroundColor() {
  const number = getRandomColor();
  setBackgroundColor(number);
}

function setTextColor(random) {
  weird.style.setProperty("--random-color", random);
}

function changeTextColor() {
  const number = getRandomColor();
  setTextColor(number);
}

function change() {
  changeAngle();
  changeShape();
  changeTextColor();
  changeBackgroundColor();
}

// Select elements
const rollButton = document.getElementById('roll-dice');
const diceOutput = document.getElementById('dice-output');
const diceType = document.getElementById('dice-type');

// Function to generate a random dice roll
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Function to show rolling animation
function rollingAnimation(callback) {
  diceOutput.classList.add('rolling'); // Add rolling class
  setTimeout(() => {
    diceOutput.classList.remove('rolling'); // Remove class after animation ends
    callback(); // Display the final result
  }, 1000); // Animation duration (1 second)
}

// Event listener for rolling the dice
rollButton.addEventListener('click', () => {
  const sides = parseInt(diceType.value, 10); // Get selected dice type
  rollingAnimation(() => {
    const result = rollDice(sides); // Roll the dice
    diceOutput.textContent = `🎲 Result: ${result}`; // Show result
  });
});

// Select the audio element and controls
const audio = document.getElementById('scroll-music');
const musicIcon = document.getElementById('music-icon');

// Function to play or pause the audio
function togglePlayPause() {
  if (audio.paused) {
    audio.play().catch((error) => console.log('Playback error:', error));
    musicIcon.textContent = '🎵'; // Playing icon
  } else {
    audio.pause();
    musicIcon.textContent = '⏸'; // Paused icon
  }
}

// Function to mute or unmute the audio
function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    musicIcon.textContent = '🎵'; // Playing icon
  } else {
    audio.muted = true;
    musicIcon.textContent = "⏸"; // Muted icon
  }
}


// Add click event listeners
musicIcon.addEventListener('click', togglePlayPause);

const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Select elements
const musicControl = document.getElementById('music-control');
const minimizeButton = document.getElementById('minimize-button');
const maximizeButton = document.getElementById('maximize-button');

// Minimize the controls
minimizeButton.addEventListener('click', () => {
  musicControl.classList.add('minimized'); // Hide the controls
  minimizeButton.style.display = 'none'; // Hide minimize button
  maximizeButton.style.display = 'block'; // Show maximize button
});

// Maximize the controls
maximizeButton.addEventListener('click', () => {
  musicControl.classList.remove('minimized'); // Show the controls
  maximizeButton.style.display = 'none'; // Hide maximize button
  minimizeButton.style.display = 'inline-block'; // Show minimize button
});

function invert() {
  document.body.style.filter = "invert()";
}

function grayscale() {
  document.body.style.filter = "grayscale()";
}

function blurScreen() {
  document.body.style.filter = "blur(10px)";
}

function changeHueRotation() {
  let number = Math.floor(Math.random() * (360 - 0 + 1) + 0);
  document.body.style.filter = "hue-rotate(" + number + "deg)";
}

function resetDistort() {
  document.body.style.filter = "none";
}