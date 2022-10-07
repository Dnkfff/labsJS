'use strict';

const welcome = (person: any) => {
    console.log(`Ave, ${person.name}${person.surname}!`);
};

const marcus = { name: 'Marcus ', surname: 'Aurelius' };
const mao = { name: 'Mao ', surname: 'Zedong' };
const cartesius = { name: 'Rene ', surname: 'Deskartes' };

welcome(marcus);
welcome(mao);
welcome(cartesius);
