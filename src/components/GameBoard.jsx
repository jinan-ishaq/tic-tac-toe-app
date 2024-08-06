import React from "react";

const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol className=" flex flex-col text-white justify-between w-fit mx-auto mt-8 mb-4 bg-[#1b082fe5] ">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex">
            {row.map((column, colIndex) => (
              <li key={colIndex}>
                <button
                  className="bg-[#743dae] w-16 h-16 m-4 text-4xl md:w-28 md:h-28 md:text-6xl "
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled ={column !== null}
                >
                  {column}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
