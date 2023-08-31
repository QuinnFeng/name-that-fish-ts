import { Component } from "react";
import { counts } from "../../types";



export class ClassFinalScore extends Component<{counts:counts}> {
  render() {
    const {correctCount,incorrectCount} = this.props.counts;
    const totalCount = correctCount+incorrectCount;
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
}
