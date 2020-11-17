console.log('**********Task Nr4**********');
function didziausiasSkaiciusSarase(list) {
let biggest = 0;

if(typeof(list) !== 'object') {
    console.log('Pateikta netinkamo tipo reikšmė.');
    return false;
}

if(list.length === 0) {
    console.log('Pateiktas sąrašas negali būti tuščias.');
    return false;
}
biggest = list[0];
for (let i = 0; i < list.length; i++) {
    if(typeof(list[i]) !== 'number' || isNaN(list[i])) {
        console.log('Pateikta netinkamo tipo reikšmė.');
        return false;
    }
    if (list[i] > biggest) {
        biggest = list[i];
        }
    }
    return biggest;
    }
console.log(didziausiasSkaiciusSarase([1, NaN]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase(["pomidoras"]));
console.log(didziausiasSkaiciusSarase([]));
