"use strict";
// 1 - void
const withoutReturn = () => {
    console.log("Essa função não tem retorno");
};
withoutReturn();
// 2 - callback como argumento
const greeting = (name) => {
    return `Olá ${name}`;
};
const preGreeting = (f, userName) => {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
};
preGreeting(greeting, "Carol");
// 3 - Generic functions
const getFirstElement = (arr) => {
    return arr[0];
};
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
const mergeObjects = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const newObj = mergeObjects({ name: "Lanai" }, { age: 27, nacionality: 'brazilian' });
console.log(newObj);
// 4 - Constraint: Limitar a generic
const biggestNumber = (a, b) => {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    ;
    return biggest;
};
console.log(biggestNumber(3, 9));
console.log(biggestNumber("3", "27"));
// 5 - Especificar tipo de argumento
const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};
// const mergeArrays = <T>(arr1: T[], arr2: T[]) => {
//   return arr1.concat(arr2);
// }
console.log(mergeArrays([1, 2, 3], [4, 5]));
console.log(mergeArrays([1, 2, 3], ["4", "5"]));
// 6 - Parâmetros opcionais
const modernGreeting = (name, greet) => {
    if (greet) {
        return console.log(`Olá ${greet} ${name}, como vai?`);
    }
    ;
    return console.log(`Olá ${name}, como vai?`);
};
modernGreeting("Carol");
modernGreeting("Caroline Canale", "Sra.");
// 7 - Unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log('X é um número');
    }
}
;
doSomething([1, 2, 3]);
doSomething(5);
// 8 - Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
;
// showErrorMessage("Algum erro aqui!");
// 9 - Rest operator com TS
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
;
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 27, 389, 4087, 57832));
// 10 - Destructuring como parâmetro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e custa R$${price}`;
}
const prod = {
    name: 'Biquíni',
    price: 107,
};
console.log(showProductDetails(prod));
// DESAFIO SEÇÃO 5:
