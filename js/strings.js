const vardas = 'Vardenis';
const hello = "Labas rytas Lietuva!"
console.log(vardas + ' ' + hello);

const neiginis = "don't"
console.log(neiginis);

const fraze = '"Andrius - As mires"';
console.log(fraze);

const mother = "Mother told me: \"Don't do it!\"."
const mother1 = '"Mother told me: "Don\'t do it!".'
console.log(mother);
console.log(mother1);

const html = '<div>\
                <p>Lorem upsum its amet</p>\
                <a href="#">Don\'t click me</a>\
              </div>';
console.log(html);

const html2 = `Don't Fuck with my "Heart"`
console.log(html2);


// Jurgis ir Ana ejo i miska.
const berniukas = 'Jurgis';
const mergaite = 'Ana';
const vieta = 'miska';
const veiksmas = 'ejo';

/*const pasaka = berniukas + ' ir ' + mergaite + ' ' +
veiksmas + ' i ' + vieta + '.';*/
const pasaka =
 `${berniukas} ir ${mergaite} ${veiksmas} i ${vieta}`;

console.log(pasaka)

const name = 'Rimantas';
const surname = 'Belovas';
const birth = 1940;
const heroSays = `${name} ${surname} says (${2020 -birth})`;
console.log(heroSays);