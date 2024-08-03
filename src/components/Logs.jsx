const Logs = ({ turns }) => {
  return (
    <ol className="text-white text-2xl">
      {turns.map((turn) => (
        <li className="my-4" key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected ({turn.square.row} ,{turn.square.col})
        </li>
      ))}
    </ol>
  );
};

export default Logs;
