console.log('**********Task Nr1**********')
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());
/* SKAICIAI:
- SVEIKIEJI
- DESIMTAINIAI
- TEIGIAMI/NEIGIAMI
- NaN
- Infinity
*/
// input VALIDATION
console.log('**********Task Nr2**********')
function daugyba(a = 5, b = 5) {
    if ( '' + b === 'NaN') {
        console.log('Klaida222!');
        return false;
    }
    if( isNaN(a)) {
        console.log('Klaida333!');
        return false;
    }
    if(typeof a === 'number' & typeof b ==='number') {
    //function LOGIC
    const suma = a * b;
    //function RESULT
    return suma;
    }
    else {
        console.log('Klaida! Iveskyte skaiciu!')
        return false;
    }
    /*if(typeof a !== 'number') {
        console.log('Klaida');
        return false;
    }
    if(typeof b !== 'number') {
         console.log('Klaida!);
    }
      //function LOGIC
    const suma = a * b;
    //function RESULT
    return suma;*/
}
const skaicius1 = 10;
const skaicius2 = -5;
const skaicius3 = 77;
console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));

