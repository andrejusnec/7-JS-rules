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
console.log('**********Task Nr3**********')

function skaitmenuKiekisSkaiciuje(n) {
    let numberLenght = 0;
    if(typeof n !== 'number' || isNaN(n)) {
        console.log('Pateikta netinkamo tipo reikšmė.')
        return false;
    } 
    if (n === true){
        n = false;
        console.log('Pateikta netinkamo tipo reikšmė.')
        return false;
    }
    if(n < 0){
        for(let i = 0; n < -1 ; i++) {
            n = n /10;
            numberLenght++
        }
    }
    else if(n === 0) {
        numberLenght = 1;
    }
    else{
    for(let i = 0; n >= 1; i++) {
        n = n/10;
    numberLenght++;
    }
}

   /*
    do { n/=10; numberLenght++ } while (n>=1)*/
        return numberLenght;
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('*******************************************');
function skaitmenuKiekisSkaiciuje2(num) {
    let numberLenght2 = 0;
    if(typeof num !== 'number' || isNaN(num)) {
        console.log('Pateikta netinkamo tipo reikšmė.')
        return false;
    } 
    if (num === true){
        num = false;
        console.log('Pateikta netinkamo tipo reikšmė.')
        return false;
    }
    let str = String(num);
    for(let i = 0; i < str.length; i++){
        if(isnumber(str[i])){
            numberLenght2++
        }
        else{
        numberLenght2
    }
    }
    return numberLenght2;
}
function isnumber(arg){
    let flag = false;
    const mass = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for(let i = 0; i < mass.length; i++) {
        if(mass[i] === arg) {
            flag = true;
            break;
        }
        
    }
    return flag;
}
console.log(skaitmenuKiekisSkaiciuje2(5.4578));
console.log(skaitmenuKiekisSkaiciuje2(781));
console.log(skaitmenuKiekisSkaiciuje2(37060123456));
console.log(skaitmenuKiekisSkaiciuje2(true));
console.log(skaitmenuKiekisSkaiciuje2("asd"));
console.log(skaitmenuKiekisSkaiciuje2(NaN));
