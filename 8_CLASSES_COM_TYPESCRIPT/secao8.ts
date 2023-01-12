// 1 - campos em classe

// 
class User {
  name!: string
  age!: number
}

const luiza = new User();
console.log(luiza);

luiza.name = "Luiza";
console.log(luiza);

// 2 - Constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

}

const joao = new NewUser("João", 28);
console.log(joao);

// Campos readonly
class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car('Fusca');
console.log(fusca);
console.log(fusca.wheels);

fusca.name = "Fusca turbo"
console.log(fusca);

// Herança e super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine('trator');

class SoftMachine extends Machine {
  accessories

  constructor(name: string, accessories: number) {
    // O super faz a ponte entre a classe estendida e essa classe atual
    // colocar o param name dentro de super faz essa conexão
    super(name)
    this.accessories = accessories
  }
}

const dryer = new SoftMachine('Secador', 3);
console.log(dryer);

// 5 - Métodos
class Dwarf {
  name

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey Stranger!");
  }
}

const soneca = new Dwarf('Soneca');

console.log(soneca);

soneca.greeting()

// 6 - O this
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model} , que tem ${this.hp} cavalos de potência`)
  }
}

const volvo = new Truck('Volvo', 400)
const scania = new Truck('Scania', 500)

volvo.showDetails()
scania.showDetails()

// Getters

class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return this.name + " " + this.surname
  }
}

const mariaDolores = new Person("Maria", "Dolores");

console.log(mariaDolores.name);
console.log(mariaDolores.surname);

console.log(mariaDolores.fullName);

// 8 - Setters
class Coords {
  x!: number
  y!: number

  set fillX(x: number) {
    if(x === 0) {
      return
    }
    this.x = x
    console.log('X inserido com sucesso');
  }

  set fillY(y: number) {
    if(y === 0) {
      return
    }
    this.y = y
    console.log('Y inserido com sucesso');
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 0

console.log(myCoords);

myCoords.fillY = 10
console.log(myCoords);

console.log(myCoords.getCoords);

// 9 - Implements
interface showTitle {
  itemTitle(): string
}

class BlogPost implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle() {
    return `o título do blogpost é ${this.title}`
  }
}

const myBlogpost = new BlogPost('Meu título de blog')
console.log(myBlogpost.itemTitle());

class TestingInterface implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle() {
    return `Título  teste: ${this.title}`
  }
}

const myTestInterface = new TestingInterface('Título teste')
console.log(myTestInterface);
console.log(myTestInterface.title);
console.log(myTestInterface.itemTitle());

// 10 - Override de métodos
class Base {
  someMethod() {
    console.log('alguma coisa');
  }
}

const myBase = new Base()
myBase.someMethod()

class NewBase extends Base {
  someMethod(): void {
    console.log('alguma outra coisa');
  }
}

const myNewBase = new NewBase()
myNewBase.someMethod()

// 11 - Public
class C {
  public x = 10
}

class D extends C {}

const cInstance = new C()

console.log(cInstance.x);

const dInstance = new D()
console.log(dInstance.x);

// 12 - Protected
class E {
  protected x = 20
}

// class F extends E {

// }

// se F estiver vazio como D, não conseguimos acessar pq é protected
// console.log(Finstance.x);

class F extends E {
  // mas se criarmos um métodos conseguimos acessar através do this
  showX() {
    console.log(`X: ${this.x}`);
  }
}

const fInstance = new F()
fInstance.showX()

// -------------------------

class G {
  protected protectedMethod() {
    console.log('Esse é um método protegido');
  }
}

class H extends G {
  showProtectedMethod() {
    this.protectedMethod()
  }
}

const hInstance = new H();
hInstance.showProtectedMethod()

// 13 - Private
class PrivateClass {
  private name = "Private name"

  // para acessarmos name é necessário criarmos um método
  showName () {
    return this.name
  }

  private noShowName () {
    console.log('Você não tem acesso ao nome');
  }
}

const pObj = new PrivateClass()

// Property 'name' is private and only accessible within class 'PrivateClass'
// console.log(pObj.name);

console.log(pObj.showName());

// class getPrivateClass extends PrivateClass {
//   showPrivateName() {
//     this.noShowName()
//   }
// }

// const newObj = new getPrivateClass()
// console.log(newObj.showPrivateName());
// Property 'noShowName' is private and only accessible within class 'PrivateClass'.

// 14 - Static
// class staticMembers {
//   prop = "Teste static"
// }

// console.log(staticMembers.prop);
// Não é possível acessar
// Property 'prop' does not exist on type 'typeof staticMembers'

class staticMembers {
  static prop = "Teste static"

  static staticMethod() {
    console.log('Este é um método estático');
  }
}

console.log(staticMembers.prop);

staticMembers.staticMethod();

// Generic Class
class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `O first é ${this.first}`
  }
}

const newItem = new Item('caixa', 'surpresa');
console.log(newItem);

console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);

const secondItem = new Item(3, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);

// 16 - Parameters properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name
    this.price = price
    this.qty = qty
  }

  get getQty() {
    return `A quantidade é ${this.qty}`
  }

  get getPrice() {
    return `O preço é R$${this.price}`
  }
}

const newShirt = new ParameterProperties('camiseta', 5, 45.99)
console.log(newShirt.name);

// Property 'qty' is private and only accessible within class 'ParameterProperties'.
// console.log(newShirt.qty);

console.log(newShirt.getQty);
console.log(newShirt.getPrice);

// Class Expressions
const myClass = class<T> {
  name

  constructor(name: string) {
    this.name = name
  }
}

const pessoa = new myClass("Joanne")
console.log(pessoa);

// 18 - Abstract class
abstract class AbstractClass {
  abstract showName(): void
}

// Cannot create an instance of an abstract class.
// const newObj = new AbstractClass();

class AbstractExample extends AbstractClass {
  name: string

  constructor(name: string) {
    super()
    this.name = name
  }

  showName(): void {
    console.log(`O nome é ${this.name}`);
  }
}

const example = new AbstractExample('Luna')
example.showName()
