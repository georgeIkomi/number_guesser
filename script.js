let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generating target number for each round.
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// determine guess closest to target number
const compareGuesses = (humanGuess, computerGuess, TargetNum) => {
    const humanDifference = Math.abs(TargetNum - humanGuess); // distance between target number and human guess
    const computerDifference = Math.abs(TargetNum - computerGuess); // distance between target number and computer guess
    return humanDifference <= computerDifference;
};

// update scores
const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
};