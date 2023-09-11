import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../Functional/FunctionalGameBoard";

export class ClassApp extends Component<Record<string, never>, ClassAppState> {
  state: ClassAppState = {
    correctCount: 0,
    incorrectCount: 0,
  };

  updateCounts(isCorrect: boolean) {
    isCorrect
      ? this.setState({ correctCount: this.state.correctCount + 1 })
      : this.setState({ incorrectCount: this.state.incorrectCount + 1 });
  }

  render() {
    const { correctCount, incorrectCount } = this.state;
    const totalCount = correctCount + incorrectCount;
    const isFinished = totalCount === initialFishes.length;
    return (
      <>
        {!isFinished ? (
          <>
            <ClassScoreBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
            />
            <ClassGameBoard
              updateCounts={(isCorrect: boolean) =>
                this.updateCounts(isCorrect)
              }
            />
          </>
        ) : (
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
        )}
      </>
    );
  }
}

export interface ClassAppState {
  incorrectCount: number;
  correctCount: number;
}
