import React from 'react';

// CSS
import style from './TaskForm.module.css';

export interface IAppProps {
  btnText: string
}

export function TaskForm ({ btnText }: IAppProps) {
  return (
    <form className={style.form}>
      <div className={style.input_container}>
        <label htmlFor='title'>Título:</label>
        <input type='text' name='title' placeholder='Título da tarefa'/>
      </div>
      <div className={style.input_container}>
        <label htmlFor='dificulty'>Dificuldade:</label>
        <input type='text' name='dificulty' placeholder='Dificuldade da tarefa'/>
      </div>
      <input type='submit' value={btnText} />
    </form>
  );
}
