'use strict';

import * as variables from "./variables";

const MAXIMUM = variables.MAXIMUM;
const INTERVAL = variables.INTERVAL;
let counter = variables.counter;

const event = (task: any) => {

    setInterval(() => {

    } , INTERVAL); //

        if (counter === MAXIMUM){
         console.log('The end');
         clearInterval();
         return;
        }

    console.dir({ counter, date: new Date })
    //counter++;

};

console.dir(event(void{}));

setInterval(event, INTERVAL);
