
const mass = [1, 5, 1, 1, 1, 1, 1, 1, 1];
let p0 = mass[0];
let p1 = mass[1];
let uniq = 0;
let l = mass.length; //6 количество элементов в массиве

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

























//6 количество элементов в массиве


/* 18 длинна масива - 1 =
 индекс =  переменная [ индекс ] - это значение переменной!!!*/