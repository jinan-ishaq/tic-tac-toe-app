import PropTypes from 'prop-types';

const GameOver = ({ isWinner, handleReMatchTheGame }) => {
  return (
    <section className="bg-custom-rgba absolute top-0 w-[90%] h-full flex flex-col text-white justify-center	mx-auto	">
      <p className="text-6xl text-[#af79ea] text mb-8">GAME OVER</p>
      <p className="text-4xl mb-12">
        {isWinner ? `${isWinner} Win!` : "It Is A Draw!"}
      </p>
      <button
        className="border w-fit mx-auto p-4 text-2xl rounded-md border-[#af79ea] text-[#af79ea]"
        onClick={handleReMatchTheGame}
      >
        Rematch
      </button>
    </section>
  );
};

GameOver.propTypes = {
  isWinner:PropTypes.bool.isRequired,
  handleReMatchTheGame:PropTypes.func.isRequired,
}

export default GameOver;
