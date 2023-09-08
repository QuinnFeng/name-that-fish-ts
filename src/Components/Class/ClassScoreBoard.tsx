import { Component } from "react";
import "./styles/score-board.css";
import { Counts, initialFishesName } from "../../types";

const answersLeft = Array.from(initialFishesName, (fish) => fish);

export class ClassScoreBoard extends Component<Counts> {
  constructor(props: Counts) {
    super(props);
    this.state = { isCorrect: false };
  }

  componentDidUpdate(prevProps: Counts) {
    const { incorrectCount: cIC, correctCount: cCC } = this.props;
    const { correctCount: pCC } = prevProps;
    console.log(pCC + "" + cIC + " " + cCC);
    if (cCC > pCC) {
      const fishToRemove = initialFishesName[cIC + cCC - 1];
      const indexToRemove = answersLeft.findIndex(
        (value) => value == fishToRemove
      );
      answersLeft.splice(indexToRemove, 1);
      this.setState({ isCorrect: true });
    }
  }

  render() {
    const { incorrectCount, correctCount } = this.props;

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
