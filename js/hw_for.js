console.log('************Ciklo for panaudojimas************');
console.log(`Task Nr1.`);
console.log('Suskaičiuoti ką gausime susumavus skaičius intervale(imtinai)');
const skaicius10 = 0;
const skaicius20 = 0;
let suma1 = 0;
for (let i = skaicius10; i <= skaicius20; i++) {
    suma1 += i;
}
console.log(`Susumavus skaičius intervale nuo
${skaicius10} iki ${skaicius20} gauname: ${suma1}`);
console.log('***********************************');
const skaicius11 = 0;
const skaicius22 = 4;
let suma2 = 0;
for (let i = skaicius11; i <= skaicius22; i++) {
    suma2 += i;
}
console.log(`Susumavus skaičius intervale nuo
${skaicius11} iki ${skaicius22} gauname: ${suma2}`);
console.log('***********************************');
const skaicius13 = 0;
const skaicius23 = 100;
let suma3 = 0;
for (let i = skaicius13; i <= skaicius23; i++) {
    suma3 += i
}
console.log(`Susumavus skaičius intervale nuo
${skaicius13} iki ${skaicius23} gauname: ${suma3}`);
console.log('***********************************');
const skaicius14 = 574;
const skaicius24 = 815;
let suma4 = 0;
for (let i = skaicius14; i <= skaicius24; i++) {
    suma4 += i;
}
console.log(`Susumavus skaičius intervale nuo
${skaicius14} iki ${skaicius24} gauname: ${suma4}`);
console.log('***********************************');
const skaicius15 = -50;
const skaicius25 = 50;
let suma5 = 0;
for (let i = skaicius15; i <= skaicius25; i++) {
    suma5 += i;
}
console.log(`Susumavus skaičius intervale nuo
${skaicius15} iki ${skaicius25} gauname: ${suma5}`);
console.log('***********************************');
const skaicius16 = -70;
const skaicius26 = 30;
let suma6 = 0;
for (let i = skaicius16; i <= skaicius26; i++) {
    suma6 += i;
}
console.log(`Susumavus skaičius intervale nuo
${skaicius16} iki ${skaicius26} gauname: ${suma6}`);
console.log('***********************************');
console.log('Task Nr2');
console.log(`2.	Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
a.	pvz.: “abcdef” -> “fedcba” `);
const zodis1 = 'Lana del Rey - Summertime Sadness';
let atv1 = '';
for (let i = zodis1.length - 1; i >= 0; i--) {
    atv1 += zodis1[i];
}
console.log(`"Lana Del Rey - Summertime Sadness" -> "${atv1}"`);
console.log('***********************************');
console.clear();
console.log('Task Nr3');
console.log(`Suskaičiuoti, kiek nurodytame intervale yra skaičių,
 kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai`);
 /* KEICIASI INTERVALO SKAICIAI : NUM IR KEICIAI DALIJAMOJO REIKSME*/
const num31 = 0;
const num41 = 11;
let kiekisBE1 = 0;
for (let i = num31; i <= num41; i++) {
    if(i % 3 === 0){
        kiekisBE1++;
    }
}
console.log(`Skaičių intervale tarp ${num31} ir ${num41}, besidalijančių 
be liekanos iš 3 yra ${kiekisBE1} vienetai`);
console.log('***********************************');
let kiekisBE2 = 0;
for (let i = num31; i <= num41; i++) {
    if(i % 3 === 0){
        kiekisBE1++;
    }
}
console.log(`Skaičių intervale tarp ${num31} ir ${num41}, besidalijančių 
be liekanos iš 3 yra ${kiekisBE1} vienetai`);
console.log('***********************************');
/*const num32 = 8;
const num42 = 31;
let kiekisBE2 = 0;
for(let i = num32; i <= num42; i++) {
    if(i % 5 === 0) {
        kiekisBE++;
    }
}
console.log(`Skaiciu intervalo : ${num32} - ${num42} : 
${kiekisBE2} skaiciai dalijasi is 5 be likucio`);
console.log('***********************************');
/*



