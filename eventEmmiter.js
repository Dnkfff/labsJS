'use strict';

const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
    if (counter === MAX_VALUE){
        console.log ('The end');
        clearInterval(timer);
        return;
    }
    console.log({counter, date: new Date})
    counter++;

};
console.log('Start');

timer = setInterval(event, INTERVAL);
