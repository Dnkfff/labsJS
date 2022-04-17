'use strict'

let avarage = (a, b) =>{
  return (a+b)/2;
}

let square = (x) =>{
  return (Math.pow(x, 2));
}

let cube = (x) =>{
  return (Math.pow(x,3));
}
let array = [];

let calculate =function ( )  {
  for (let i = 0 ; i <= 9; i++)
  {
array.push(avarage(cube(i), square(i) ) );
}
  console.log (array);
}