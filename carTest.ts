/*
* File: carTest.ts
* Author: Bán Cintia
* Copyright: 2021, Bán Cintia
* Group: Szoft II/N
* Date: 2021-12-02
* Github: https://github.com/bncinti/
* Licenc: GNU GPL
*/

import {Car} from './car';
let car = new Car ();
car.id = 6;
car.plate = 'BCH-922';
car.color = 'fekete';
car.brand = 'Renault';
car.year = 1997;
car.capacity = 1200;
car.fuel = 'benzin';
car.price = 22000;
car.sold = true;

console.log(car.id,car.plate,car.color,car.brand,car.year,car.capacity,car.fuel,car.price,car.sold);
console.log('Bán Cintia', '2021.12.02', 'SzoftII/N');