import React, { createContext } from 'react';

// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 11 - Consumindo Context API
import Context from './components/Context';

// 9 - Type
type textOrNull = string | null;

// 10 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - Variáveis
  const name: string = "Milena";
  const age: number = 28;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  // 9 - Type
  const myText: textOrNull = 'Tem algum texto aqui'
  let mySecondText: textOrNull = null

  // 10 - Context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
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
        {
          myText && 
          <p>Tem texto na variável</p>
        }
        {
          mySecondText && 
          <p>Tem texto na variável</p>
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
