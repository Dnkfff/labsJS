import * as variables from './variables'

const array = variables.array;
const array2 = variables.array2;
let range = function (startNum: number, endNum: number) {
  for (let i:number = startNum; i <= endNum; i++)
    {array.push(); }
console.dir(array);
}

range(15,30);

let rangeOdd = function(startNum: number, endNum: number){
  for (let i = startNum; i <= endNum ; i++)
  {
    if (i%2 !== 0)
      { array2.push(i); }
  }
  console.dir(array2);
}

rangeOdd(15,30);

export { array, array2 }
