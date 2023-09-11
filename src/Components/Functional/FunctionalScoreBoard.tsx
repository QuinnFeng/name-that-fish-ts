import { initialFishes } from "./FunctionalGameBoard";
import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = initialFishes.map(fish=>fish.name);
const length=answersLeft.length;

interface FunctionalScoreBoardProps{
  correctCount:number;
  incorrectCount:number;
}

export function FunctionalScoreBoard({correctCount,incorrectCount}:FunctionalScoreBoardProps) {
  const totalCount=correctCount+incorrectCount;

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.slice(totalCount,length).map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
