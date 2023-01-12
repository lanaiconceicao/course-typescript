"use strict";
;
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log('O produto está disponível');
    }
    else {
        console.log('O produto não está disponível');
    }
}
;
const biquini = {
    name: 'biquíni',
    price: 107,
    isAvailable: true,
};
showProductDetails(biquini);
showProductDetails({ name: 'camiseta', price: 49.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = { email: 'carol@email.com' };
const u2 = { email: 'luiza@email.com', role: 'cantora' };
showUserDetails(u2);
showUserDetails(u1);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const lanai = {
    name: 'Lanai',
    age: 27,
};
const mulherHuck = {
    name: 'Mulher Huck',
    age: 33,
    superpowers: ['super força', 'ficar verde']
};
console.log(lanai);
console.log(mulherHuck);
console.log(mulherHuck.superpowers[1]);
const roseUsingPanty = {
    name: 'Rose',
    type: 'panty',
    number: 40,
};
console.log(roseUsingPanty);
console.log(roseUsingPanty.name);
// 7 - ReadOnlyArray
let myArray = ['maçã', 'laranja', 'banana'];
// myArray[3] = 'mamão';
console.log(myArray);
myArray.forEach((item) => {
    console.log(`Fruta: ${item}`);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, 2, "3", 4, true];
console.log(myNumberArray);
const anotherUser = ["Lanai", 27];
anotherUser[0] = "Caroline";
console.log(anotherUser[0]);
// anotherUser[1] = "29";
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
