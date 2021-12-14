const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <h1> SCORE</h1>
      <hr />
      <h2>{score}</h2>
    </div>
  );
};

export default ScoreBoard;
