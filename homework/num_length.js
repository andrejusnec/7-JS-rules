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
        return 'Pateikta netinkamo tipo reikšmė.';
    } 
    if (num === true || num === Infinity){
        num = false;
        return 'Pateikta netinkamo tipo reikšmė.';
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
console.log(skaitmenuKiekisSkaiciuje2(1));
console.log(skaitmenuKiekisSkaiciuje2(781));
console.log(skaitmenuKiekisSkaiciuje2(37060123456));
console.log(skaitmenuKiekisSkaiciuje2(true));
console.log(skaitmenuKiekisSkaiciuje2('asd'));
console.log(skaitmenuKiekisSkaiciuje2(NaN));