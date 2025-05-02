import { AppBar } from '../AppBar/AppBar';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}
