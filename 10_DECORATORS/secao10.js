"use strict";
// 1 - Exemplo decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// O decorator retorna uma função onde temos acesso a 3 argumentos:
// target, propertyKey, descriptor
function myDecorator() {
    console.log('Initialize decorator!');
    return function (target, propertyKey, descriptor) {
        console.log('Executando decorator');
        console.log('target: ', target);
        // dentro de target temos acesso ao constructor de myClass e ao método testing
        console.log('propertyKey: ', propertyKey);
        // retorna o nome do método: testing
        console.log('descriptor: ', descriptor);
        // retorna um obj com as chaves: configurable, enumerable, value (que contém o método 'testing'), writable
    };
}
class myClass {
    // o decorator está atrelado ao método
    testing() {
        console.log('Terminando a execução do método');
    }
}
__decorate([
    myDecorator()
    // o decorator está atrelado ao método
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
console.log('-------------------------------------------');
// 2 - Múltiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('executou a');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('executou b');
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log('executou c');
    };
}
class MultipleDecorators {
    // executa de baixo pra cima, do mais próximo do método pro mais longe
    // chama 'c', depois 'b', e por fim 'a', só depois chama o método
    testing() {
        console.log('terminando a execução');
    }
}
__decorate([
    a(),
    b(),
    c()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
console.log('-------------------------------------------');
// 3 - Class decorator
function classDecorator(constructor) {
    // roda primeiro
    console.log(constructor.name);
    if (constructor.name === "User") {
        // roda o segundo
        console.log('Criando usuário');
    }
}
// classDecorator roda antes de chamar o método construtor
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const lanai = new User('Lanai');
console.log(lanai);
console.log('-------------------------------------------');
// 4 - Method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine('trator');
console.log(trator.showName());
console.log('-------------------------------------------');
// 5 - Acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro é ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro é ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
console.log('-------------------------------------------');
// 6 - Property decorator
// Desafio: Modificar o modo de mostrar o id
// Recebe 1 e transforma em 00001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
