import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Header from "./components/Header";
import Players from "./components/Players";
import { deriveActivePlayer } from "./helpers/deriveActivePlayer";
import { deriveWinner } from "./helpers/deriveWinner";

const INIT_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player1",
  O: "Player2",
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...INIT_GAME_BOARD.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  const winner = deriveWinner(gameBoard, playerName);

  const isDraw = gameTurns.length === 9 && !winner;

  const onSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurn;
    });
  };

  const onPlayerNameChange = (symbol, newName) => {
    setPlayerName((preName) => {
      return { ...preName, [symbol]: newName };
    });
  };

  const handleReMatchTheGame = () => {
    setGameTurns([]);
  };
  return (
    <>
      <Header />
      <main className="bg-[#140524] w-[95%] mx-auto flex flex-col mt-8	mb-4 rounded-md p-4 lg:w-[50%] content-center	relative">
        <ol className="flex flex-col m-4 md:flex-row">
          <Players
            playerName={PLAYERS.X}
            playerSymbol="X"
            isActive={activePlayer === "X"}
            onPlayerNameChange={onPlayerNameChange}
          />
          <Players
            playerName={PLAYERS.O}
            playerSymbol="O"
            isActive={activePlayer === "O"}
            onPlayerNameChange={onPlayerNameChange}
          />
        </ol>
        <GameBoard onSelectSquare={onSelectSquare} board={gameBoard} />
        {winner || isDraw ? (
          <GameOver
            isWinner={winner}
            handleReMatchTheGame={handleReMatchTheGame}
          />
        ) : undefined}
      </main>
    </>
  );
}

export default App;
