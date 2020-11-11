/*******************Kintamųjų inicijavimas******************/
const dalis1 = 'Kintamųjų inicijavimas';
console.log(dalis1);
const uzduotis1 = 'Pirma Uzduotis';
//Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console
console.log(uzduotis1);
const pirmasSkaicius = 47;
console.log('Pirmas skaicius yra: ' + pirmasSkaicius);
const antrasSkaicius = -14;
console.log('Antras skaicius yra: ' + antrasSkaicius);
const treciasSkaicius = 3.02;
console.log('Trecias skaicius yra: ' + treciasSkaicius);

const uzduotis2 = 'Antra uzduotis';
/*Sukurti 3 kintamuosius su teksto tipo reikšmėmis
  Po kiekvieno jų inicijavimo, išvesti į console*/
console.log(uzduotis2);
const miestas1 = 'Lisabona';
console.log("Pirmas miestas yra: " + miestas1);
const miestas2 = 'Dublinas';
console.log("Antras miestas yea: " + miestas2);
const miestas3 = 'Maskva';
console.log("Trecias miestas yra: " + miestas3);

const uzduotis3 = 'Trecia uzduotis';
/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
  Po kiekvieno jų inicijavimo, išvesti į console*/
console.log(uzduotis3);
const teleloto = [3, 7, 21, 64, 91];
console.log(teleloto);
const pinkodas = [0, 0, 0, 0, 1];
console.log(pinkodas);
const geriausi = [47, 12, 89, -100, 3.14];
console.log(geriausi);

const uzduotis4 = 'Ketvirta uzduotis';
/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
  Po kiekvieno jų inicijavimo, išvesti į console*/
console.log(uzduotis4);
const auto = ['Audi', 'Ford', 'Honda', 'Wolksvagen', 'Mitsubishi'];
console.log(auto);
const zeminai = ['Afrika', 'Europa', 'Azija', 'Siaures Amerika', 'Antarktida'];
console.log(zeminai);
const dainininkai = ['Andrius Mamontovas', 'GJan', 'Marijonas Mikutavičius',
    'Bjelle', 'Linas Adomaitis'];
console.log(dainininkai);

/***************Veiksmai su kintamaisiais***************/
const dalis2 = 'Veiksmai su kintamaisiais';
console.log(dalis2);
/*Susumuoti visus skaičiaus tipo kintamuosius
  Rezultatą išvesti į console*/
console.log(uzduotis1);
const suma = pirmasSkaicius + antrasSkaicius + treciasSkaicius;
console.log(suma);
console.log(uzduotis2);
/*Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
  Rezultatą išvesti į console*/
const eilute = miestas1 + ' ' + miestas2 + ' ' + miestas3;
console.log(eilute);
console.log(uzduotis3);
/*Apskaičiuoti vertę iš sąrašų kurių verčių tipas 
  yra skaičiai, pagal pateiktą logiką
  a.	1-2+3-4+5
  b.	Rezultatą išvesti į console*/
const suma1 = teleloto[0] - teleloto[1] + teleloto[2]
    - teleloto[3] + teleloto[4];
const Rezultatas1 = `Pirmo skaiciu saraso verte: ${suma1}.`;
console.log(Rezultatas1);
const suma2 = pinkodas[0] - pinkodas[1] + pinkodas[2] -
    pinkodas[3] + pinkodas[4];
const Rezultatas2 = `Antro skaiciu saraso verte: ${suma2}.`;
console.log(Rezultatas2);
const suma3 = geriausi[0] - geriausi[1] + geriausi[2] -
    geriausi[3] + geriausi[4];
const Rezultatas3 = `Trecio skaiciu saraso verte: ${suma3}.`;
console.log(Rezultatas3);
console.log(uzduotis4);
/*Sujungti sąrašų vertes, kurių tipas yra tekstai,
nuo sąrašo galo iki pradžios taip, jog
tarp jų būtų kablelis ir tarpas*/
const sarasas1 = auto[0] + ', ' + auto[1] + ', ' + auto[2] +
    ', ' + auto[3] + ', ' + auto[4];
const Result1 = `Automobilius sarasas: ${sarasas1}.`;
console.log(Result1);
const sarasas2 = zeminai[0] + ', ' + zeminai[1] + ', ' + zeminai[2] +
    ', ' + zeminai[3] + ', ' + zeminai[4];
const Result2 = `Zeminu sarasas: ${sarasas2}.`;
console.log(Result2);
const sarasas3 = dainininkai[0] + ', ' + dainininkai[1] +
    ', ' + dainininkai[2] + ', ' + dainininkai[3] + ', ' +
    dainininkai[4];
const Result3 = `Lietuvos geriausi atlikejai: ${sarasas3}.`;
console.log(Result3);
const Total = `${sarasas1}, ${sarasas2}, ${sarasas3}.`;
console.log(Total);





