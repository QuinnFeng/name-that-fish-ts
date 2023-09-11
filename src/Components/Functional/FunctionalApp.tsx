import { FunctionalGameBoard, initialFishes } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const totalCount = correctCount + incorrectCount;
  const isFinished = totalCount === initialFishes.length;
  function updateCounts(isCorrect: boolean) {
    isCorrect
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  }

  return (
    <>
      {!isFinished ? (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          <FunctionalGameBoard updateCounts={updateCounts} />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      )}
    </>
  );
}
