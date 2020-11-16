const pirmas1 = 2;
const antras2 = 2;
const suma1 = pirmas1 + antras2;
console.log(`${pirmas1} + ${antras2} = ${suma1}`);

function sumavimasa(a, b, c = 100) {
    const suma = a + b + c;
    console.log(`${a} + ${b} + ${c} = ${suma}`);
}
sumavimasa(10, 5);

function pazVidurkis(list) {
    let suma = 0;
    const kiekis = list.length
    for (let i = 0; i < kiekis; i++) {
        const pazymys = list[i];
        suma = suma + pazymys;
    }
    const vidurkis = suma / kiekis
    console.log(vidurkis);
    if (kiekis === 0) {
        console.log('Neturi pazymiu');
    } else {
        console.log(`Vidurkis ${Math.floor(vidurkis)}`);
    }
}
pazVidurkis([3, 5, 6]);

function square(g) {
    const kvadratas = g * g;
    return kvadratas;
}
const trysKv = square(3)
square(100);
console.log(trysKv);
console.log('***************************************');
function laipsnis(s, l) {
    let labas = 1;
    for (let i = 1; i <= l; i++) {
        labas = labas * s;
    }
    return labas;
}
console.log(laipsnis(3, 3));
const kubas2 = laipsnis(2, 3);
console.log(kubas2, '->', 8);

const du10 = laipsnis(2, 10);
console.log(du10, '->', 1024);

function factorialas(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}
console.log(factorialas(0));
console.log(factorialas(1));
console.log(factorialas(2));
console.log(factorialas(3));
console.log(factorialas(4));
console.log(factorialas(5));


function lyginisfaktorialas(n) {
    // 1 * 2 * 4 * 6 * 8
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            rez = rez * i;
        }
    }
    return rez;
}
const lf0 = lyginisfaktorialas(0);
const lf1 = lyginisfaktorialas(1);
const lf2 = lyginisfaktorialas(2);
const lf3 = lyginisfaktorialas(3);
const lf4 = lyginisfaktorialas(4);
const lf5 = lyginisfaktorialas(5);
const lf6 = lyginisfaktorialas(6);

console.log(lf0);
console.log(lf1);
console.log(lf2);
console.log(lf3);
console.log(lf4);
console.log(lf5);
console.log(lf6);

