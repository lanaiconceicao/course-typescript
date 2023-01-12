// 1 - void
const withoutReturn = (): void => {
  console.log("Essa função não tem retorno");
};

withoutReturn();

// 2 - callback como argumento
const greeting = (name: string) => {
  return `Olá ${name}`;
};

const preGreeting = (f: (name: string) => string, userName: string) => {
  console.log("Preparando a função");
  
  const greet = f(userName);

  console.log(greet);
};

preGreeting(greeting, "Carol");

// 3 - Generic functions

const getFirstElement = <T>(arr: T[]) => {
  return arr[0];
};

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));

const mergeObjects = <T, U>(obj1: T, obj2: U) => {
  return {
    ...obj1,
    ...obj2,
  }
};

const newObj = mergeObjects({name: "Lanai"}, {age: 27, nacionality: 'brazilian'});

console.log(newObj);

// 4 - Constraint: Limitar a generic

const biggestNumber = <T extends number | string>(a: T, b: T): T => {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  };
  return biggest;
};

console.log(biggestNumber(3, 9));
console.log(biggestNumber("3", "27"));

// 5 - Especificar tipo de argumento

const mergeArrays = <T>(arr1: T[], arr2: T[]) => {
  return arr1.concat(arr2);
}
// const mergeArrays = <T>(arr1: T[], arr2: T[]) => {
//   return arr1.concat(arr2);
// }

console.log(mergeArrays([1, 2, 3], [4, 5]));
console.log(mergeArrays<number | string>([1, 2, 3], ["4", "5"]));

// 6 - Parâmetros opcionais

const modernGreeting = (name: string, greet?: string) => {
  if (greet) {
    return console.log(`Olá ${greet} ${name}, como vai?`);
  };
  return console.log(`Olá ${name}, como vai?`);
};

modernGreeting("Carol");
modernGreeting("Caroline Canale", "Sra.");

// 7 - Unknown

function doSomething(x: unknown) {
  if(Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log('X é um número');
  }
};

doSomething([1, 2, 3]);
doSomething(5);

// 8 - Never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
};

// showErrorMessage("Algum erro aqui!");

// 9 - Rest operator com TS
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
};

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 27, 389, 4087, 57832));

// 10 - Destructuring como parâmetro
function showProductDetails({name, price}: {name: string, price: number}): string {
  return `O nome do produto é ${name} e custa R$${price}`
}

const prod = {
  name: 'Biquíni',
  price: 107,
}

console.log(showProductDetails(prod));

// DESAFIO SEÇÃO 5:
