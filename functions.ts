'use strict'

//import { useNavigation } from '@react-navigation/native';
import array from "./arrays";

let avarage = (a: number, b: number): number => {
  return (a+b)/2;
}

let square = (x: number) => {
  return (Math.pow(x, 2));
}

let cube = (x: number) => {
  return (Math.pow(x,3));
}

export default function calculate() {
  for (let i = 0 ; i <= 9; i++){
    array.shift(avarage(cube(i), square(i)));
  }
  console.log(array);
}
