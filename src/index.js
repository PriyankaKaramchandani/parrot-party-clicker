// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up

const state = {
  addParrotImg: null,
  parrotCountLabel: null,
  parrotCount: 0,
  addResetButton: null,
};

const loadControls = () => {
  state.addParrotImg = document.querySelector('img');
  state.parrotCountLabel = document.getElementById('parrot-count-label');
  state.addResetButton = document.getElementById('reset-button');
};

const registerEventHandlers = () => {
  loadControls();
  state.addParrotImg.addEventListener('click', () => {
    console.log('click');
    ++state.parrotCount;
    state.parrotCountLabel.textContent = state.parrotCount;
    if (state.parrotCount === 5) {
        state.addParrotImg.width = 400;
        state.addParrotImg.height = 400;
    }
  });

  state.addResetButton.addEventListener('click', () => {
    state.parrotCount = 0;
    state.parrotCountLabel.textContent = state.parrotCount;
    state.addParrotImg.width = 128;
    state.addParrotImg.height = 128;
  })
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
