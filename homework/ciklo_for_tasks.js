console.log('***************Task Nr1*****************');
const mass = [1, 5, 1, 1, 1, 1, 1, 1, 1];
let p0 = mass[0];
let p1 = mass[1];
let uniq = 0;
let l = mass.length; // количество элементов в массиве

if (p0 === p1) {
    for (let i = 2; i < l; i++) {
        if (p0 !== mass[i]) {
            uniq = mass[i];
            break;
        }

    }
}
else {
    if (p0 === mass[l - 1]) { /* 18 длинна масива - 1 =
        индекс =  переменная [ индекс ] - это значение переменной!!!*/
        uniq = p1;
    }
    if (p1 === mass[l - 1]) {
        uniq = p0;
    }
}

console.log(uniq);

console.log('***************Task Nr2*****************');
//Duotas sveiku skaiciu masivas. Reikia rasti:
//skaiciu masivo elementa su didziausia reiksme
//skaiciu masivo elementa su maziausia reiksme
const masivas = [56, 105, 102, 2, 55, 2052, 555, 10000, 5464];
let biggest = 0;
let smallest = masivas[0];
for (let i = 0; i < masivas.length; i++) {
    if (masivas[i] > biggest) {
        biggest = masivas[i];
    }
}
console.log(`Didziausias skaicius yra : ${biggest}`);


for (let i = 1; i < masivas.length; i++) {
    if (masivas[i] < smallest) {
        smallest = masivas[i];
    }
    /*console.log(`MAsivas ${masivas[i]}`);
    console.log(` Maziausias ${smallest}`);*/
}
console.log(`Maziausias skaicius yra :${smallest}`);
console.log('***************Task Nr3*****************');

const skaiciais1 = [3, 5, 20, 0, 0];
const skaiciais2 = [0, -13, 20, -4, 3, -2];
let poz1 = 0; let poz2 = 0;
let neg1 = 0; let neg2 = 0;
let nul1 = 0; let nul2 = 0;
for (let i = 0; i < skaiciais1.length; i++) {
    if (skaiciais1[i] > 0) {
        poz1++;
    }
    else if (skaiciais1[i] < 0) {
        neg1++;
    }
    else {
        nul1++;
    }
}
for (let i = 0; i < skaiciais2.length; i++) {
    if (skaiciais2[i] > 0) {
        poz2++;
    }
    else if (skaiciais2[i] < 0) {
        neg2++;
    }
    else {
        nul2++;
    }
}
if (poz1 > poz2) {
    console.log(`Pirmame skaiciu array yra daugiau 
    teigiamu skaiciu`);
}
else if (poz1 < poz2) {
    console.log(`Antrame skaiciu array yra daugiau 
    teigiamu skaiciu`);
}
else {
    console.log(`Abu skaiciu arra'jai turi vienoda
    teigiamu skaiciu kiek`);
}
if (neg1 > neg2) {
    console.log(`Pirmame skaiciu array yra daugiau 
    neigiamu skaiciu`);
}
else if (neg1 < neg2) {
    console.log(`Antrame skaiciu array yra daugiau 
    neigiamu skaiciu`);
}
else {
    console.log(`Abu skaiciu arra'jai turi vienoda
    neigiamu skaiciu kiek`);
}
if (nul1 > nul2) {
    console.log(`Pirmame skaiciu array yra daugiau 
    nuliu`);
}
else if (nul1 < nul2) {
    console.log(`Antrame skaiciu array yra daugiau
    nuliu`);
}
else {
    console.log(`Abu skaiciu arra'jai turi vienoda
    nuliu kiek`);
}
console.log('***************Task Nr4*****************');
/* Duotas skaiciu masivas. Nustatykite ar skaiciai yra
surusioti didejimo tvarka*/
const masiukas = [1, 2, 2, 5, 5, 7, 10, 10, 10];
/*let tvarka = masiukas[0];*/
let flag = true;
for (let i = 0; i < masiukas.length - 1; i++) {
    if (masiukas[i] > masiukas[i + 1]) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log(`Skaiciai surusioti didejimo tvarka`);
}
else {
    console.log(`Rusiavimo tvarkos nera`);
}
console.log('***************Task Nr5*****************');
/*Sukurti skaiciu masiva.Palyginti ar jame yra tokiu paciu
skaiciu
const numPalig = [1, 50, 20, 100, 20];
let yra = true;
let numBeris = numPalig[0];
for(let i = 0; i < numPalig.length; i++) {
    if(numPalig[i !== numPalig[i + 1]])

*/
console.log('***************Task Nr6*****************');
/*Parasyti programa, kuri nustato mokyniu skaiciu, kuriu ugis virsija
vidurki*/

const array = [182, 156, 177, 165, 150, 142, 190, 180, 150, 159];
let AVGH = 0;
let AVGall = 0;
let beyondAVG = 0;
for (i = 0; i < array.length; i++) {
    AVGH += array[i];
}
AVGall = AVGH / array.length;
for(let i = 0; i < array.length; i++) {
    if(array[i] > AVGall) {
        beyondAVG++;
    }
}

console.log(`Mokyniu kuriu ugis yra 
virs vidurkio kiekis: ${beyondAVG}`);

console.log('***************Task Nr7*****************');

const digits = [3, 9, 7, 10, 2, 5, 8, 8, 1, 8, 8, 7, 7, 9, ];
let middle = 0;
let total = 0; let z = 0;
for(let i = 0; i < digits.length; i++) {
    total += digits[i];
}
middle = total / digits.length
middle = Math.round(middle);
for(let i = 0; i < digits.length; i++) {
    if(middle === digits[i]) {
        z++
        console.log(digits[i]);
    }
}
if(z <= 0) {
    console.log(`There is none!`);
}


















//6 количество элементов в массиве


/* 18 длинна масива - 1 =
 индекс =  переменная [ индекс ] - это значение переменной!!!*/