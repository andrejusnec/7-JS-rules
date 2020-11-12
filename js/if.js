/******************PALYGINIMO SALIGA*****************/
/* if
galimi operatoriai: >, < ,>=, <=, ==, !=, ===, !==
naudotini: >, <, >=, <=, ===, !==( klausia ar jie ne lygus?!)
nenaudotini: ==, !=
draudziami: <!, !< , =>, =<
*/

/*
Galimos Strukturos:
if() {}
if() {} else {}
if() {} else if(){} else{}
if() {} else {} if()
*/
const accbalance = 500;
const transfer = 200;

if (accbalance < transfer) {
    console.log('Message: Saskaitoje nepakanka lesu');
}
 else {
    console.log('Message: Pavedimas padarytas');
}
/*if (accbalance >= transfer){
console.log('Message: Pavedimas padarytas');
}*/
/*Pirmas budas*/
const akys = 'blue';
if(akys == 'melynos')
{
    console.log('Jis yra melagis');
}
else if(akys == 'zalios')
{
    console.log('Uzsispire meninkai');
}
else if(akys == 'raudonos')
{
    console.log('Narkomanas!')
}
else
{
    console.log('Tada neidomus....NEXT!');
}
/* Antras budas*/
const akys2 = 'Zalios';
if(akys2 == 'melynos') {
    console.log('Grazu!');
} 
else{
        if(akys2 == 'Zalios')
    {
        console.log('Meeeeeeile');
    } 
        else {
        console.log('Ar turi akis??');
    }
    }


    const pirmas = 8;
    const antras = '8';
    if(pirmas !== antras)
    {
        console.log(true);
    }else{
        console.log(false);
    }

    const zodis1 = 'labas';
    const zodis2 ='rytas';
    if(zodis1 === zodis2) {
        console.log(true);
    } else{
        console.log(false);
    }