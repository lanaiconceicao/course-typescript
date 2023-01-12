"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
console.log(showData(true));
console.log(showData([1, 2, 3]));
// 2 - Constraint em generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = {
    name: 'cropped',
    color: 'white'
};
const otherObj = {
    name: 'T-shirt',
    color: 'black',
    qty: 35,
};
const thirdObj = {
    category: 'clothes',
};
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'red' };
const myPen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'black' };
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomekey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomekey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Matheus",
    age: 30,
    hasDrivelicense: true,
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// 6 - Typeof type operator
const userName = "Matheus";
const userName2 = "Joana";
const userName4 = 'Joaquina';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga',
};
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
