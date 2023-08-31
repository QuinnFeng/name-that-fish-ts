import { Component } from "react";
import "./styles/score-board.css";
import {initialFishesName, scoreBoardProps } from "../../types";




const answersLeft = Array.from(initialFishesName,item=>item);

export class ClassScoreBoard extends Component<{scoreBoardProps:scoreBoardProps}> {
  render() {
    const {counts,isCorrect}= this.props.scoreBoardProps;
    const {incorrectCount,correctCount} = counts;
    if(isCorrect){
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
}
