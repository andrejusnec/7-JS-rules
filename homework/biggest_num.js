console.log('**********Task Nr4**********');
function didziausiasSkaiciusSarase(list) {
let biggest = 0;

if(typeof(list) !== 'object') {
    return 'Pateikta netinkamo tipo reikšmė.';
}

if(list.length === 0) {
    return 'Pateiktas sąrašas negali būti tuščias.';
}
biggest = list[0]; // - Infinity
for (let i = 0; i < list.length; i++) {
    if(typeof(list[i]) !== 'number' || isNaN(list[i])) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (list[i] > biggest) {
        biggest = list[i];
        }
    }
    return biggest;
    }
console.log(didziausiasSkaiciusSarase(['Labas', 1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase(["pomidoras"]));
console.log(didziausiasSkaiciusSarase([]));
