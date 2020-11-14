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
const masivas = [4, 45, 105, 102, 55, 20, 2052, 1, 555, 10000, 5464];
let biggest = 0;
let smallest = masivas[0];
for (let i = 0; i < masivas.length; i++) {
    if(masivas[i] > biggest) {
        biggest = masivas[i];
    }    
}
console.log(`Didziausias skaicius yra : ${biggest}`);


for(let i = 1; i < masivas.length; i++) {
    if(masivas[i] < masivas[0]) {
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
for(let i = 0; i < skaiciais1.length; i++) {
    if(skaiciais1[i] > 0) {
        poz1++;
    }
    else if(skaiciais1[i] < 0) {
        neg1++;
    }
    else {
        nul1++;
    }
}
for(let i = 0; i < skaiciais2.length; i++) {
    if(skaiciais2[i] > 0) {
        poz2++;
    }
    else if(skaiciais2[i] < 0) {
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
else if(poz1 < poz2){
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
else if(neg1 < neg2){
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
else if(nul1 < nul2){
    console.log(`Antrame skaiciu array yra daugiau
    nuliu`);
}
else {
    console.log(`Abu skaiciu arra'jai turi vienoda
    nuliu kiek`);
}
/*console.log(`${poz}****${neg}****${nul}`);*/























//6 количество элементов в массиве


/* 18 длинна масива - 1 =
 индекс =  переменная [ индекс ] - это значение переменной!!!*/