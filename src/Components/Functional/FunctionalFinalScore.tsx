import "./styles/final-score.css";
import { counts } from "../../types";

export function FunctionalFinalScore({counts}:{counts:counts}){
  const {correctCount,incorrectCount}=counts;
  const totalCount = correctCount+incorrectCount;
  return(
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
}
