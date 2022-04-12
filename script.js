let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generating target number for each round.
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};