import { useSelector } from "react-redux";
import { Task } from "./Task";

export const CompletedTaskList = () => {
    const tasks = useSelector((state) => state.todos);

    return (
        <article className="todo__listTasks">
            {tasks.map((todo, key) => (
                todo.completed ? <Task className=' checked' id={todo.id} title={todo.title} key={key} completed={todo.completed} /> : ""
            ))}
        </article>
    );
};