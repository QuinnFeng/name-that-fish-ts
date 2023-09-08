import "./styles/final-score.css";
import { Counts } from "../../types";

export function FunctionalFinalScore(Counts: Counts) {
  const { correctCount, incorrectCount } = Counts;
  const totalCount = correctCount + incorrectCount;
  return (
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
