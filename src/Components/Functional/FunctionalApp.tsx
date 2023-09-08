import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishesName } from "../../types";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  function updateCounts(isCorrect: boolean) {
    isCorrect ? setCorrectCount(correctCount + 1) : setIncorrectCount(incorrectCount + 1);
  }

  return (
    <>
      {!(correctCount + incorrectCount === initialFishesName.length) ? (
        <>
          <FunctionalScoreBoard correctCount={correctCount} incorrectCount={incorrectCount} />
          <FunctionalGameBoard updateCounts={updateCounts} />
        </>
      ) : (
        <FunctionalFinalScore correctCount={correctCount} incorrectCount={incorrectCount} />
      )}
    </>
  );
}
