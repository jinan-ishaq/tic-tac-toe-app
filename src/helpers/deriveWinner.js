import { WINNING_COMBINATION } from "../winning_combination";

export function deriveWinner(gameBoard, playerName) {
  let winner;

  for (const combination of WINNING_COMBINATION) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = playerName[firstSymbol];
    }
  }
  return winner;
}
