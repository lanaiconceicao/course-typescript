import React, { useState } from 'react';

// components
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Modal } from './components/Modal';

// CSS
import style from './App.module.css'

// Interface
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const handleDelete = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if(display) {
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide');
    }
  };

  const handleEdit = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task)
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });

    setTaskList(updatedItems);
    hideOrShowModal(false);
  }

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText='Editar tarefa'
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
        />
      <Header />
      <main className={style.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText='Criar tarefa'
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
