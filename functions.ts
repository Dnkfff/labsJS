import { array, array2 } from './arrays';

let avarage = (a: number, b: number) => {
  return (a+b)/2;
}

let square = (x: number) => {
  return (Math.pow(x, 2));
}

let cube = (x: number) => {
  return (Math.pow(x, 3));
}

export default function calculate() {
  for (let i = 0 ; i <= 9; i++){
    array.shift(avarage(cube(i), square(i)));
  }
  console.log(array);
}

console.log(array2)
console.log(avarage(5,6));
