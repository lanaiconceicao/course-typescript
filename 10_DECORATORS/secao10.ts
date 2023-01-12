// 1 - Exemplo decorator

// O decorator retorna uma função onde temos acesso a 3 argumentos:
// target, propertyKey, descriptor

function myDecorator() {
  console.log('Initialize decorator!');
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {

    console.log('Executando decorator');

    console.log('target: ', target);
    // dentro de target temos acesso ao constructor de myClass e ao método testing
    console.log('propertyKey: ', propertyKey);
    // retorna o nome do método: testing
    console.log('descriptor: ', descriptor);
    // retorna um obj com as chaves: configurable, enumerable, value (que contém o método 'testing'), writable
  }
}

class myClass {
  @myDecorator()
  // o decorator está atrelado ao método
  testing() {
    console.log('Terminando a execução do método');
  }
}

const myObj = new myClass()

myObj.testing()

console.log('-------------------------------------------');

// 2 - Múltiplos decorators
function a() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou a');
  }
}

function b() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou b');
  }
}

function c() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou c');
  }
}

class MultipleDecorators {
  // executa de baixo pra cima, do mais próximo do método pro mais longe
  // chama 'c', depois 'b', e por fim 'a', só depois chama o método
  @a()
  @b()
  @c()
  testing() {
    console.log('terminando a execução');
  }
}

const multiple = new MultipleDecorators()

multiple.testing()

console.log('-------------------------------------------');

// 3 - Class decorator
function classDecorator(constructor: Function) {
  // roda primeiro
  console.log(constructor.name);
  if(constructor.name === "User") {
    // roda o segundo
    console.log('Criando usuário');
  }
}

// classDecorator roda antes de chamar o método construtor
@classDecorator
class User {
  name

  constructor(name:string) {
    this.name = name
  }
}

const lanai = new User('Lanai')

console.log(lanai);

console.log('-------------------------------------------');

// 4 - Method decorator
function enumerable(value: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value
  }
}

class Machine {
  name

  constructor(name:string) {
    this.name = name
  }

  @enumerable(true)
  showName() {
    console.log(this);
    return `O nome da máquina é ${this.name}`
  }
}

const trator = new Machine('trator')

console.log(trator.showName())

console.log('-------------------------------------------');

// 5 - Acessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `O nome do monstro é ${this.name}`
  }

  @enumerable(true)
  get showAge() {
    return `A idade do monstro é ${this.age}`
  }
}

const charmander = new Monster("Charmander", 10);
console.log(charmander);

console.log('-------------------------------------------');

// 6 - Property decorator

// Desafio: Modificar o modo de mostrar o id
// Recebe 1 e transforma em 00001
function formatNumber() {
  return function(target: Object, propertyKey: string) {

    let value: string

    const getter = function() {
      return value
    }

    const setter = function(newVal: string) {
      value = newVal.padStart(5, "0")
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })
  }
}


class ID {
  // Se tirarmos esse decorator formatNumber() ele mostra o id 1
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID("1")

console.log(newItem);
