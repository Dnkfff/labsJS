'use strict';

import * as variables from "./variables";

const event = (task: Event) => {

    setInterval(() => {

    } , INTERVAL);

        if (counter === MAXIMUM){
         console.log ('The end');
         clearInterval();
         return;
        }

    console.dir({ counter, date: new Date })
    //counter++;

};

//console.dir(event());

//timer = setInterval(event, INTERVAL);
