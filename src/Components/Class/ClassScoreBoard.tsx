import { Component } from "react";
import "./styles/score-board.css";
import { initialFishes } from "./ClassGameBoard";

const answersLeft = initialFishes.map((fish) => fish.name);
const length = answersLeft.length;

interface ClassScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
}

export class ClassScoreBoard extends Component<ClassScoreBoardProps> {
  constructor(props: ClassScoreBoardProps) {
    super(props);
    this.state = { isCorrect: false };
  }

  render() {
    const { incorrectCount, correctCount } = this.props;
    const totalCount = incorrectCount + correctCount;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.slice(totalCount, length).map((answer: string) => (
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
