const petriukoPaz = [2, 10, 5, 2];
console.log(petriukoPaz);

// kaip suskaicioti pazymiu vidurki
let suma = 0;
/*suma = suma + petriukoPaz[0];
suma = suma + petriukoPaz[1];
suma = suma + petriukoPaz[2];
suma = suma + petriukoPaz[3];*/
const kiek = petriukoPaz.length

for (let i = 0; i <= kiek; i++) {
    suma += petriukoPaz[0];
    console.log(suma);
}

let number = 7;
console.log(number);
/* Jei kas menesi zmogus uzdirba 820, tai kiek jis tures 
pajamu per 11 menesiu? */
const alga = 820;
const men = 11;
let pajamos = 0;
for (let i = 1; i <= men; i++) {
    pajamos += alga;
    console.log(`Pajamos : ${pajamos}.`);
}
console.log('**************************************');
/*
Parasyti skaicius nuo 8 iki 8 
*/
for (let i = 8; i >= 4; i--) {
    console.log(i);
}

/* Isvardinti ciferblato skaiciaus nuo duotos valandos
iki galo */
let val = 3;
const maxVal = 12;
for (let i = val; i <= maxVal; i++) {
    console.log(` ${i} val`);
}
console.log(`**************************`);

/*
Duotas miestu sarasas
Isvardinti kiekviena aplankyta miesta
*/
const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Alytus'];
const kiek2 = miestai.length
for (let i = 0; i < kiek2; i++) {
    /*const miestoPav = miestai[i];
    console.log(`Aplankiau: ${miestoPav}`)*/
    const miestoPav = miestai[i];
    console.log(`Aplankiau:  ${miestoPav}`)
}

console.log('*************************************');

/*
Isvardinti saraso narius is galo.
*/
const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);
for(let i = abc.length - 1;i >=0; i--) {
    console.log(abc[i]);
}

console.clear();

const text = 'bebras';
console.log(text);
kiek123 = text.length;
for(let i = 0; i < kiek123; i++)
{
    console.log(text[i]);
}
console.log('***********************');
/* Duodamas zodis ir is jo reikia isrinkti kas antra raide
ir isspaudinti kas gaunasi
pvz: abcdef -> bdf 
*/
const wordas = 'Katinelis';
const step = 4;
const pirmosraidePozicija = step - 1;
let blemba = '';
for(let i = pirmosraidePozicija; i < wordas.length;i = i + step)
{
    const raide = wordas[i];
    blemba = blemba + raide
    /*blemba += wordas[i];*/
}
console.log(blemba)

