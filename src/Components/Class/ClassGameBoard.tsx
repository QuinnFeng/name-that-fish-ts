import { Component, SyntheticEvent} from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { ClassGameBoardState, gameBoardProps } from "../../types";


const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];



export class ClassGameBoard extends Component<gameBoardProps,ClassGameBoardState> {
  constructor(props: gameBoardProps) {
    super(props);
    this.state = {
      index:0,
      fishName:""
    };
  }
  
  submitHandler(e:SyntheticEvent){
    e.preventDefault(); 
    this.props.updateCounts(this.state.fishName===initialFishes[this.state.index].name);
    if(this.state.index===initialFishes.length-1){
      this.props.setIsFinish(true);
    }
    this.setState({index:this.state.index+1,fishName:""});
  }

  render() {
    const {index,fishName}=this.state;
    const nextFishToName = initialFishes[index];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={(e)=>this.submitHandler(e)}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input id="fish-guess" type="text" name="fish-guess" value={fishName} onChange={(e)=>this.setState({fishName:e.target.value})}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
