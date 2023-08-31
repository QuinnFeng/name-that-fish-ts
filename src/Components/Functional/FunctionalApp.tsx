import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [counts,setCounts]= useState({correctCount:0,incorrectCount:0});
  const [isCorrect,setIsCorrect]=useState<boolean|null>(null);
  const [isFinish,setIsFinish]=useState(false);

  function updateCounts(isCorrect:boolean){
    const updatedCounts = isCorrect ? {
      ...counts,
      correctCount: counts.correctCount + 1,
    }
    : {
        ...counts,
        incorrectCount: counts.incorrectCount + 1,
    };
    setCounts(updatedCounts);
    setIsCorrect(isCorrect);
  }

  return (
    <>
      {
        !isFinish?
        <>
          <FunctionalScoreBoard scoreBoardProps={{counts,isCorrect}}/>
          <FunctionalGameBoard 
              updateCounts = {(isCorrect: boolean) => updateCounts(isCorrect)}
              setIsFinish  = {(isFinish: boolean) => setIsFinish(isFinish)}
          />
        </>
        :
        <FunctionalFinalScore counts={{...counts}} />
      }
    </>
  );
}
