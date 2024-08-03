import { useState } from "react";

const Players = ({
  playerName,
  playerSymbol,
  isActive,
  onPlayerNameChange,
}) => {
  const [name, setName] = useState(playerName);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditState = () => {
    setIsEdit((pre) => !pre);

    if (isEdit) {
      onPlayerNameChange(playerSymbol, name);
    }
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <li
      className={`text-white flex justify-between w-11/12 mx-auto mt-4 items-center border px-4 py-2 rounded-md md:w-2/5 ${
        isActive ? "border-[#743dae] border-4" : undefined
      }`}
    >
      {isEdit ? (
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="bg-[#1d0e30c8] p-2 text-center w-2/3"
        />
      ) : (
        <p className="p-2 text-center	 w-2/3">{name}</p>
      )}
      <span className="text-lg">{playerSymbol}</span>
      <button className="w-8" onClick={handleEditState}>
        {isEdit ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Players;
