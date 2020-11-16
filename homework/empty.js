function tusciaFunkcija() {
    return false;
}
/* SKAICIAI:
- SVEIKIEJI
- DESIMTAINIAI
- TEIGIAMI/NEIGIAMI
- NaN
- Infinity
*/
console.log( tusciaFunkcija(5));
// input VALIDATION
function multy(a = 5, b = 5) {
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
console.log(multy());
console.log(multy(4, 4));
console.log(multy(NaN, NaN));