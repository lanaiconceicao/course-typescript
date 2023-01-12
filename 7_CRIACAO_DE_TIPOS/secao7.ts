// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado é ${arg}`
}

console.log(showData(5));
console.log(showData("Testando generic"));
console.log(showData(true));
console.log(showData([1, 2, 3]));

// 2 - Constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
  return `O nome do produto é ${obj.name}`
}

const myObj = {
  name: 'cropped',
  color: 'white'
}

const otherObj = {
  name: 'T-shirt',
  color: 'black',
  qty: 35,
}

const thirdObj = {
  category: 'clothes',
}

console.log(showProductName(myObj));
console.log(showProductName(otherObj));
// console.log(showProductName(thirdObj));

// 3 - Interfaces com generics
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: 'Fusca', wheels: 4, engine: 1.0, color: 'red'}
const myPen: Pen = {name: 'Caneta BIC', wheels: false, engine: false, color: 'black'}

console.log(myCar);
console.log(myPen);

// 4 - Type parameters
function getSomekey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB',
}

console.log(getSomekey(server, 'ram'));
// console.log(getSomekey(server, 'teste'));

// 5 - Keyof type operator
type Character = {
  name: string;
  age: number;
  hasDrivelicense: boolean;
}

// Representa TODAS as chaves de Character
type C = keyof Character;

function showCharName(obj: Character, key: C):string {
  return `${obj[key]}`
}

const myChar: Character = {
  name: "Matheus",
  age: 30,
  hasDrivelicense: true,
}

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));

// 6 - Typeof type operator
const userName: string = "Matheus";
const userName2: typeof userName = "Joana";
// const userName3: typeof userName = 14;
type x = typeof userName;
const userName4: x = 'Joaquina';

// 7 - Indexed access types
type Truck = {km: number, kg: number, description: string};

// Acessa UMA chave específica
type Km = Truck['kg'];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga',
}

function showKm(km: Km) {
  console.log(`O veículo tem a km de ${km}`);
}

showKm(newTruck.km);

const newCar = {
  km: 5000,
  kg: 1000,
}

showKm(newCar.km);

// 8 - Conditional expressions types
interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

type myTypeB = Teste extends {showNumber(): number} ? string : boolean;

const someVar: myType = 5;
// const someVar2: myType = "teste";

// 9 - Template literals type
type testA = "text";

type CustomType = `some ${testA}`;

const testing: CustomType = "some text";
// const testing2: CustomType = "some text2";

type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1}` | `${a2}`;