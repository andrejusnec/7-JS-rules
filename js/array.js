/*
Saraso tipo kintamieji:
sinonimai :SARASAS, MASYVAS, ARRAY, MATRICA*
Inicijuojama su lauztyniais skliausteliais; [] 
viduje gali buti ivairiu tipo reiksmiu;
bet rekomenduotina, kad butu tik vieno tipo reiksmes.
*/

//Pazymiai
//petriukoPaz = 2, 10, 5, 2, 9, 7;

const petriukoPaz = [2, 10, 5, 2];
console.log(petriukoPaz);

// kaip suskaicioti pazymiu vidurki
let suma = 0;
suma = suma + petriukoPaz[0];
suma = suma + petriukoPaz[1];
suma = suma + petriukoPaz[2];
suma = suma + petriukoPaz[3];
const kiekis = petriukoPaz.length
const vidurkis = suma / kiekis;
console.log(vidurkis);

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Alytus'];
console.log(miestai);
console.log(miestai[0]);
