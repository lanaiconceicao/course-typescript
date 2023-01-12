// 1 - Type guardian
// Criar um caso para cada tipo que possa vir, porque não podemos garantir o correto retorno de dados de uma API
const sumMatchType = (a: number | string, b: number | string) => {
  if (typeof a === "string" && typeof b === "string") {
    return parseInt(a) + parseInt(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    console.log("Impossível realizar a soma");
  }
}

console.log(sumMatchType("2", "5"));
console.log(sumMatchType(2, 5));
sumMatchType(2, "5");

// 2 - Checando se valor existe

const operations = (arr: number[], operation?: string | undefined ) => {
  if (operation) {
    if (operation === "sum") {
      return console.log(arr.reduce((n, total) => n + total));
    }
    if (operation === "multiply") {
      return console.log(arr.reduce((n, total) => n * total));
    }
  } else {
    console.log("Por favor, defina uma operação");
  }
}

operations([1, 2, 3, 4]);
operations([1, 2, 3, 4], "sum");
operations([1, 2, 3, 4], "multiply");

// Instance of

class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const jhon = new User("Jhon");
const carol = new SuperUser("Caroline");

console.log(jhon);
console.log(carol);

const userGreeting = (user: object) => {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}!`);
  }
}

userGreeting(carol);
userGreeting(jhon);

// Operador in

class Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name;
    // Esse if é um tipo de narrowing, porque verifica se o valor existe
    if (breed) {
      this.breed = breed;
    };
  };
};

const dum = new Dog("Dum");
const taz = new Dog("Taz", "shitzu");

console.log(dum);
console.log(taz);

const showDogDetails = (dog: Dog) => {
  if('breed' in dog) {
    console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
  } else {
    console.log(`O cachorro ${dog.name} não tem raça`);
  }
}

showDogDetails(dum);
showDogDetails(taz);

// Desafio 3

// Recebe de 1 a 5 estrelas
// ou false quando o usuário não deixa review

const getReview = (review: boolean | number) => {
  if (typeof review === "boolean") {
    console.log("O usuário não deixou review ):")
  } else if (typeof review === "number") {
    console.log(`O usuário deixou uma nota de ${review} estrelas`);
  } else {
    console.log("A review não é válida");
  }
}

getReview(4);
getReview(false);