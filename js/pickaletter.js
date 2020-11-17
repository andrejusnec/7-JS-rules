function pickLetter(text, step) {
    //input validation
    if (typeof text !== 'string') {
        return 'Error!';
    }
    if(text === '') {
        return "Error! Your text can't be empty!"
    }
    if (typeof step !== 'number') {
        return 'Error! Your second entry is not a number!';
    }
    /*if ( step % 1 !== 0) {
        return 'Error! Step has to be integer!';
    }*/
    if (step !== Math.round(step)) {
        return 'Error! Your step has to be integer!';
    }
    const size = text.length
    if (step > size) {
        return 'Error! Your step is too big compared with step length';
    }
    if (step === 0) {
        return 'Error! Your step cant be zero!';
    }
    //logic
    let rez = '';
    //for(let i = 0 ; i < size; i ++)
    //if(i % step === step - 1) {
    // rez += text[i];
    //}
    if(step > 0){
        const firstletter = step - 1;
    for (let i = firstletter; i < size; i += step) {
        rez += text[i];
    }
} else {
    const firstletter = size + step;
    for (let i = firstletter; i >= 0; i += step) {
        rez += text[i];
    }
}
    //postlogic Validation
    return rez;
    //return
}

console.log(pickLetter('', 3));
console.log(pickLetter('abc', 3));
console.log(pickLetter('abc', 4));
console.log(pickLetter(1561, 2));
console.log(pickLetter('abcdefg', 2));
console.log(pickLetter('abcdefghijkl', 3));
console.log(pickLetter('abc', 0));
console.log(pickLetter('abc', 1.5));
