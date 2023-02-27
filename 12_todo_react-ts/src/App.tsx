import React from 'react';

// components
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// CSS
import style from './App.module.css'
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

// Interface
import { ITask } from './interfaces/Task';

function App() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa' />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
