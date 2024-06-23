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
    } else {
        const action = rules[computerChoice][playerChoice];
        resultDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} ${action} ${playerChoice}.`;
    }
}
