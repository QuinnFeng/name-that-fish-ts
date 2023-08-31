import { initialFishesName, scoreBoardProps } from "../../types";
import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({scoreBoardProps}:{scoreBoardProps:scoreBoardProps}) {
  const {incorrectCount,correctCount} = scoreBoardProps.counts;
  if(scoreBoardProps.isCorrect){
    const fishToRemove = initialFishesName[incorrectCount + correctCount - 1];
    const indexToRemove = answersLeft.findIndex((value) => value == fishToRemove);
    if(indexToRemove!=-1){
      answersLeft.splice(indexToRemove,1);
    }
  }
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
