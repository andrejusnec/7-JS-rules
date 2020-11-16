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
/*const skaicius16 = 70;
const skaicius26 = 30;
let suma6 = 0;
if(skaicius16 > skaicius26){
for (let i = skaicius26; i <= skaicius16; i++) {
    suma6 += i;
    }
} else {
    for (let i = skaicius16; i <= skaicius26; i++) {
        suma6 += i;
        }
}
console.log(`Susumavus skaičius intervale nuo
${skaicius16} iki ${skaicius26} gauname: ${suma6}`);*/
/*
let nuo10 = [0, 0, 0, 574, -50, -70];
let iki10 = [0 , 4, 100, 815, 50, 30];
let Summa
for(let i = 0; i <= iki10.length; i++ )
{
    for (let z = nuo10[i]; z <= iki10[i]; z++) {
        Summa += z;
    }
}
    console.log(Summa); */

console.log('***********************************');
console.log('Task Nr2');
console.log(`2.	Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
a.	pvz.: “abcdef” -> “fedcba” `);
const zodis1 = 'Lana del Rey - Summertime Sadness';
let atv1 = '';
for (let i = zodis1.length - 1; i >= 0; i--) {
    atv1 += zodis1[i];
}
console.log(`${zodis1} -> "${atv1}"`);
/*pavyzdis nr2:
const text = 'abcdef';
let back = '';
for (let i = 0; i < text.length; i++) {
    const letter = text[text.length -i -1];
    back = back + letter;
}
pavyzdis nr3:
for(let i = 0; i < Text.length; i++) {
    const letter = text[i];
    back = letter + back;
}
*/
console.log('***********************************');
console.log('Task Nr3');
console.log(`Suskaičiuoti, kiek nurodytame intervale yra skaičių,
 kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai`);
/* KEICIASI INTERVALO SKAICIAI : NUM IR KEICIAI DALIJAMOJO REIKSME*/

const nuo = [0, 8, -18];
const iki = [11, 31, 18];
let kiekisBE = 0;
const del = [3, 5, 7];
for (let z = 0; z < nuo.length; z++) {
    
    for (let x = 0; x < del.length; x++) {
       
        kiekisBE = 0;
        for (let i = nuo[z]; i <= iki[z]; i++) {
           
            if (i % del[x] === 0) {
                kiekisBE++;
            }
        
        }
        console.log(`Skaičių intervale tarp ${nuo[z]} ir ${iki[z]}, besidalijančių 
        be liekanos iš ${del[x]} yra ${kiekisBE} vienetai`);
    }

}

console.log('***********************************');

const nuo1 = 0;
const iki1 = 11;
const daliklis = 3;

let kiekis = 0;
for(a = nuo1; a <= iki1; a++) {
    if(a % daliklis === 0) {
        kiekis++
    }
}
console.log(kiekis);