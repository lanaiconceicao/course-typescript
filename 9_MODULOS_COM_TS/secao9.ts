// 1 - Importação de arquivos
import importGreeting from "./greet.js";
// Podemos importar omitindo o .js

importGreeting()

// 2 - Importação de variáveis
import { x } from './variable';
console.log(x);

// 3 - Múltiplas importações
import { a, b, myFunction} from './multiple';
console.log(a);
console.log(b);
myFunction();

// 4 - Alias
import { someName as name } from "./changeName";
console.log(name);

// 5 - Importando tudo
import * as myNumbers from "./numbers";

console.log(myNumbers);

console.log(myNumbers.n1);
console.log(myNumbers.n2);
console.log(myNumbers.n3);

// 6 - Importação de tipos
import { Human  } from './myType';

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const luciana = new User('Luciana', 28);
console.log(luciana);

console.log(luciana.name);
console.log(luciana.age);


