// If you have any types that are SHARED BY MANY COMPONENTS,put them here
export type counts = {
  incorrectCount: number,
  correctCount: number
}

export type scoreBoardProps ={
  counts:counts,
  isCorrect: null|boolean
}

export interface ClassAppState {
  counts: counts,
  isCorrect: null | boolean,
  isFinish: boolean
}

export interface gameBoardProps{
  updateCounts: (isCorrect:boolean) => void;
  setIsFinish: (isFinish:boolean) => void;
}

export interface ClassGameBoardState{
  index:number,
  fishName: string
}

export const initialFishesName=["trout", "salmon", "tuna", "shark"];