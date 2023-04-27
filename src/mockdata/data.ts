import { Album } from "../models/Album";

export const albums: Album[] = [
  new Album(
    randomNumber(),
    "Night Visions",
    "Imagine Dragons",
    "Interscope",
    2012
  ),
  new Album(
    randomNumber(),
    "The Sound of Madness",
    "Shinedown",
    "Atlantic",
    2008
  ),
  new Album(
    randomNumber(),
    "Stadium Arcadium",
    "Red Hot Chili Peppers",
    "Warner Bros",
    2006
  ),
  new Album(randomNumber(), "Meliora", "Ghost", "Loma Vista", 2015),
];

function randomNumber() {
  const RandomNumber = Math.floor(Math.random() * 10);

  return RandomNumber.toString();
}
