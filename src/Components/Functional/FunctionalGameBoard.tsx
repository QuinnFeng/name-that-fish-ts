import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState,SyntheticEvent } from "react";
import { gameBoardProps } from "../../types";

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

export function FunctionalGameBoard({updateCounts,setIsFinish}:gameBoardProps) {
  const [index,setIndex]=useState(0);
  const [fishName,setFishName]=useState("");
  const nextFishToName = initialFishes[index];


  const submitHandler=(e:SyntheticEvent)=>{
    e.preventDefault(); 
    updateCounts(fishName===initialFishes[index].name);
    if(index===initialFishes.length-1){
      setIsFinish(true);
    }
    setIndex(index+1);
    setFishName("");
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e)=>submitHandler(e)}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input id="fish-guess" type="text" name="fish-guess" value={fishName} onChange={e=>setFishName(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  );
}
