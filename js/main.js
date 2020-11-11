//spausdiname sveikaji skaiciu
console.log(867685787658);

// spausdiname  desimtaini skaiciu (reikia tasko)
console.log(3.14);
console.log(3, 14);

//spausdiname teksta
console.log("Labas rytas");
console.log('Labas Rytas Ksiu');
console.log(`Labas rytas' mazute`);
/*****************************************
// KINTAMIEJI (Variable)
*****************************************/
/* Inicijavimo budai :
conts - default, tai musu pirmasis pasirinkimas
let - galima, tik jei reikia keisti reiksme
var - nenaudotinas
*/
/*
KINTAMUJU TIPAI (pagal reiksmes):
skaiciai (number) - 2020(pilnas), 3.15 (su likuciu)
-7 ( neigiamas skaicius)
tekstai (string) - bet kokx teksts " labas", 'ka tu? '
`Ilgas tekstas su ' arba "`
logines (boolean) - true, false
sarasai (array) - []
objektai (object) - {}
*/

const pirmasSkaicius = 2;
const antrasSkaicius = 3;
console.log("Pirmas skaicius turetu buti 2");
console.log(pirmasSkaicius);

const suma = pirmasSkaicius + antrasSkaicius;
console.log(suma);
console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const vardas = 'Vardenis';
const amzius = 99;
console.log(vardas);
console.log(amzius);

const sakinys = vardas + ' yra ' + amzius + 'metu amziaus';
console.log(sakinys);
const suo = 'Dzeko';
const zaislas = 'kamuolis';
const destytojas = 'Rimantas';
const kebab = 'Kebabus';
const sakis = suo + ' megstamas zaislas yra ' + zaislas
    + '. ' + destytojas + ' dievina ' + kebab + ' su jautiena.';
console.log(sakis);

const heroName = 'Dalia';
const heroLastName = 'Gribauskaite';
const birth = '1960';
const present = '2020'
const age = present - birth;

//const hero = `${heroName} ${heroLastName} yra ${present - birth} metu.`;

const hero = heroName + ' ' + heroLastName + ' yra ' + age + ' metu.';
console.log(hero);

let pinigine = 12;
const sausis = 500;
const vasaris = 470;
const kovas = 310;
const islaidos = 150;

pinigine = pinigine + (sausis - islaidos);
console.log(pinigine + '€');
pinigine = pinigine + (vasaris - islaidos);
console.log(pinigine + '€');
pinigine = pinigine + (kovas - islaidos);
console.log(pinigine + '€');
