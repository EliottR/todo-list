import { AddTask } from "./components/AddTask";
import { CompletedTaskList } from "./components/CompletedTaskList";
import { TaskList } from "./components/TaskList";

const App = () => {
  return (
    <div className="todo">
      <h1 className="todo__h1">Toutes vos tâches</h1>
      <AddTask />
      <TaskList />
      <h2 className="todo__h2">Tâches complétées</h2>
      <CompletedTaskList />
    </div>
  );
}

export default App;
