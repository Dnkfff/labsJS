'use strict'

let array = [],
array2 = [];

let range = function (startNum, endNum) {
  for (let i = startNum  ; i <= endNum ; i++)
    {array.push(i); }
console.dir (array);
}

range (15,30);

let rangeOdd = function (startNum, endNum){
  for (let i = startNum; i <= endNum ; i++)
  {
    if (i%2 !== 0)
      { array2.push(i);}

  }
  console.dir   (array2);
}
rangeOdd(15,30);