const playerWinSpan = document.getElementById('playerWin');
const playerLossSpan = document.getElementById('playerLoss');
const computerWinSpan = document.getElementById('computerWin');
const computerLossSpan = document.getElementById('computerLoss');
let playerWin = 0;
let playerLoss = 0;
let computerWin = 0;
let computerLoss = 0;

// Rules modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  iframe.location.reload();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.location.reload();
  }
};

// Character selection
const characterDropdown = document.getElementById('characterDropdown');
const displayCharacter = document.getElementById('displayCharacter');

characterDropdown.addEventListener('change', function() {
  const selectedValue = this.value;
   if (selectedValue) {
    displayCharacter.src = selectedValue;
    displayCharacter.style.display = 'block';
   }
   else {
    displayCharacter.style.display = 'none';
   }
});

messagePrompt();

// Character selection alert

function messagePrompt() {
  if (characterDropdown.selectedIndex === 0) {
    alert('Choose your character!');
  }
}


// Game play function

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const rules = {
    rock: { scissors: 'crushes', lizard: 'crushes' },
    paper: { rock: 'covers', spock: 'disproves' },
    scissors: { paper: 'cuts', lizard: 'decapitates' },
    lizard: { paper: 'eats', spock: 'poisons' },
    spock: { rock: 'vaporizes', scissors: 'smashes' },
};

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById('result');

    if (playerChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${playerChoice}.`;
    } else if (computerChoice in rules[playerChoice]) {
        const action = rules[playerChoice][computerChoice];
        resultDiv.textContent = `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} ${action} ${computerChoice}.`;
        playerWin++;
        playerWinSpan.innerText = playerWin;
        computerLoss++;
        computerLossSpan.innerText = computerLoss;
    } else {
        const action = rules[computerChoice][playerChoice];
        resultDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} ${action} ${playerChoice}.`;
        playerLoss++;
        playerLossSpan.innerText = playerLoss;
        computerWin++;
        computerWinSpan.innerText = computerWin;
    }
}


