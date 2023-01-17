import React from 'react';

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
    </div>
  );
}

export default App;
