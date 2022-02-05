import { useSelector } from "react-redux";
import { EditTask } from "./EditTask";
import { Task } from "./Task";

export const TaskList = () => {
    const tasks = useSelector((state) => state.todos);

    return (
        <article className="todo__listTasks">
            {tasks.map((todo, key) => (
                todo.edit ? <EditTask id={todo.id} key={key} oldValue={todo.title} /> : (todo.completed ? "" : <Task id={todo.id} title={todo.title} key={key} completed={todo.completed} />)
            ))}
        </article>
    );
};