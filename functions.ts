'use strict'

let avarage = (a: number, b: number): number => {
  return (a+b)/2;
}

let square = (x: number) => {
  return (Math.pow(x, 2));
}

let cube = (x: number) => {
  return (Math.pow(x,3));
}

let array = [];

let calculate = function ()  {
  for (let i = 0 ; i <= 9; i++)
  {
array.push(avarage(cube(i), square(i)) );
}
  console.log(array);
}