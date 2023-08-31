import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { ClassAppState} from "../../types";



export class ClassApp extends Component<Record<string,never>, ClassAppState> {

  state: ClassAppState = {
    counts: {
      correctCount: 0,
      incorrectCount: 0
    },
    isCorrect: null,
    isFinish: false
  }


  updateCounts(isCorrect: boolean) {
    const prevCounts = this.state.counts;
    const updatedCounts = isCorrect ? {
      ...prevCounts,
      correctCount: prevCounts.correctCount + 1,
    }
      : {
        ...prevCounts,
        incorrectCount: prevCounts.incorrectCount + 1,
      };
    this.setState({counts: { ...updatedCounts } ,isCorrect});
  }

  setIsFinish(isFinish: boolean) {
    this.setState({ isFinish });
  }

  render() {
    const { counts,isCorrect, isFinish } = this.state;
    return (
      <>
        {
          !isFinish ?
          <>
            <ClassScoreBoard scoreBoardProps={{counts,isCorrect}} />
            <ClassGameBoard 
              updateCounts = {(isCorrect: boolean) => this.updateCounts(isCorrect)} 
              setIsFinish  = {(isFinish: boolean) => this.setIsFinish(isFinish)}
            />
          </>
          :
          <ClassFinalScore counts={counts} />
        }
      </>
    );
  }
}
