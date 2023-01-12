"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
// ======
const nomes = ["Ana", "Maria"];
nomes.push("Joana");
console.log(nomes);
// 2 - Outra sintaxe array
let numbers2 = [1, 2, 3];
numbers2.push(4);
console.log(numbers2);
// ======
const nomes2 = ["Ana", "Maria"];
nomes2.push("Carol");
console.log(nomes2);
// 3 - Any: De preferência não utilizar nunca
const number3 = [1, "B", 3];
number3.push("D");
console.log(number3);
// 4 - Parâmetro de funções
const minhaFuncao = (nome, idade) => {
    console.log(`Meu nome é ${nome}, eu tenho ${idade} anos!`);
};
minhaFuncao("Lanai", 27);
// 5 - Tipo de retorno de funções
const minhaFuncao2 = (nome, idade) => {
    return `Meu nome é ${nome}, eu tenho ${idade} anos! Prazer em conhecer!`;
};
console.log(minhaFuncao2("Lanai", 27));
// 6 - Funções anônimas
setTimeout(() => {
    const salary = 1000;
    console.log(salary);
}, 5000);
// 7 - Tipos para objetos
const passaCoordenadas = (coord) => {
    console.log('x:' + coord.x);
    console.log('y:' + coord.y);
};
const objCoord = { x: 327, y: 345.6 };
passaCoordenadas(objCoord);
// 8 - Propriedades opcionais
const criaNomeCompleto = (nomeCompl) => {
    if (nomeCompl.sobrenome !== undefined) {
        return console.log(`Olá ${nomeCompl.nome} ${nomeCompl.meio} ${nomeCompl.sobrenome}`);
    }
    return console.log(`Olá ${nomeCompl.nome} ${nomeCompl.meio}`);
};
const nomeCompleto = { nome: "Joana", meio: "Souza" };
criaNomeCompleto(nomeCompleto);
const nomeCompleto2 = { nome: "Maria", meio: "José", sobrenome: "Fonseca" };
criaNomeCompleto(nomeCompleto2);
// 9 - Union types
const showBalance = (balance) => {
    console.log(`O saldo é R$${balance}`);
};
showBalance("80");
showBalance(80);
// showBalance(true) não funciona pq ele espera string ou number
// 10 - Avançando em Union Types
const showUserRole = (role) => {
    if (typeof role === "boolean") {
        return console.log('role é boolean');
    }
    ;
    return console.log('role é string');
};
showUserRole(true);
showUserRole('oi');
const showId = (id) => {
    console.log(`O ID é ${id}`);
};
showId(1);
showId("200");
;
const showCoords = (obj) => {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
};
const coordObj = {
    x: 100,
    y: 23.4,
    z: 567,
};
showCoords(coordObj);
;
;
const someone = {
    name: "Lanai",
    age: 27,
};
// Obs: Não dá pra fazer o mesmo com type
// 14 - Literal types
let test;
test = "testando";
console.log(test);
const showDirection = (direction) => {
    console.log(`A direção é ${direction}`);
};
showDirection("center");
// 15 - Non null assertion operator
const p = document.getElementById("some-p");
// console.log(p.innerText) desse jeito não aceita, dá erro
console.log(p.innerText);
// 16 - Biginit
// Para utilizar
// let n = 1000n
// temos que ir no arquivo tsconfig.json e trocar de
// "target": "es2016"
// para
// "target": "es2020"
// 17 - Symbol
// Também precisa do es2020
// let symbolA: symbol = Symbol("a");
// let symbolB = Symbol("a");      pega o tipo por inferência
// symbolA == symbolB OU symbolA === symbolB é sempre FALSE
