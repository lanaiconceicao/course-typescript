import React from 'react';

export interface IAppProps {
  btnText: string
}

export function TaskForm ({ btnText }: IAppProps) {
  return (
    <form>
      <div>
        <label htmlFor='title'>Título:</label>
        <input type='text' name='title' placeholder='Título da tarefa'/>
      </div>
      <div>
        <label htmlFor='dificulty'>Dificuldade:</label>
        <input type='text' name='dificulty' placeholder='Dificuldade da tarefa'/>
      </div>
      <input type='submit' value={btnText} />
    </form>
  );
}
