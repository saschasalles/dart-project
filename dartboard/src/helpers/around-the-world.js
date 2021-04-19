// Mode around the world
import { updateGamePlayer } from "./globalHelper"

export const handleScore = (dartValue, currentScore) => {
  let newScore = parseInt(currentScore);
  if (newScore + 1 === parseInt(dartValue)) {
    newScore++;
  }
  return newScore;
}


