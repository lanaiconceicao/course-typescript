import React from 'react';

// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

function App() {
  // 1 - Variáveis
  const name: string = "Milena";
  const age: number = 28;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <p>Está trabalhando</p>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={['tag1', 'tag2', 'tag3']}
        category={Category.JS}
      />
      <State />
    </div>
  );
}

export default App;
