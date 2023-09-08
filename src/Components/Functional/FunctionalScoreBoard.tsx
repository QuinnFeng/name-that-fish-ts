import { useEffect, useState } from "react";
import { Counts, initialFishesName } from "../../types";
import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard(Counts: Counts) {
  const { correctCount, incorrectCount } = Counts;
  const [prevCorrectCount, setPrevCorrectCount] = useState(0);

  useEffect(() => {
    if (correctCount > prevCorrectCount) {
      const fishToRemove = initialFishesName[correctCount + incorrectCount - 1];
      const indexToRemove = answersLeft.findIndex(
        (value) => value == fishToRemove
      );
      answersLeft.splice(indexToRemove, 1);
      setPrevCorrectCount(correctCount);
    }
  }, [correctCount]);

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
