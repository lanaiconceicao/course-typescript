import React from 'react';

// components
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// CSS
import style from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <h1>Conteúdo...</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
