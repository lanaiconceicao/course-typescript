// 1. Tipo de objeto para função com interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
};

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
  if (product.isAvailable) {
    console.log('O produto está disponível');
  } else {
    console.log('O produto não está disponível');
  }
};

const biquini: Product = {
  name: 'biquíni',
  price: 107,
  isAvailable: true,
}

showProductDetails(biquini);
showProductDetails({name: 'camiseta', price: 49.99, isAvailable: false});

// 2 - Propriedade opcional em interface
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`);
  
  if (user.role) {
    console.log(`A função do usuário é ${user.role}`);
  }
}

const u1: User = {email: 'carol@email.com'};
const u2: User = {email: 'luiza@email.com', role: 'cantora'};

showUserDetails(u2);
showUserDetails(u1);

// 3 - Readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
}

console.log(fusca);

// fusca.wheels = 5 (não é possível por causa do readonly)

// 4 - Index Signature - quando não sabemos o nome da chave
interface CoordObj {
  [index: string]: number
}

let coords: CoordObj = {
  x: 10
}

coords.y = 15;

console.log(coords);

// coords.z = "string" -> não é possível pq o valor precisa ser numérico

// 5 - Extending interfaces
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const lanai: Human = {
  name: 'Lanai',
  age: 27,
}

const mulherHuck: SuperHuman = {
  name: 'Mulher Huck',
  age: 33,
  superpowers: ['super força', 'ficar verde']
}

console.log(lanai);
console.log(mulherHuck);
console.log(mulherHuck.superpowers[1]);

// 6 - Intersection types
interface Character {
  name: string;
}

interface Clothes {
  type: string;
  number: number;
}

type HumanWithClothes = Character & Clothes;

const roseUsingPanty: HumanWithClothes = {
  name: 'Rose',
  type: 'panty',
  number: 40,
}

console.log(roseUsingPanty);
console.log(roseUsingPanty.name);

// 7 - ReadOnlyArray
let myArray: ReadonlyArray<string> = ['maçã', 'laranja', 'banana'];

// myArray[3] = 'mamão';

console.log(myArray);

myArray.forEach((item) => {
  console.log(`Fruta: ${item}`);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, 2, "3", 4, true];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Lanai", 27];

anotherUser[0] = "Caroline";

console.log(anotherUser[0]);

// anotherUser[1] = "29";

// 9 - Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
