import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodoState } from "../redux/TodoSlice";

export const Task = ({ id, title, completed, className = "" }) => {
    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({ id: id, completed: !completed }))
    }

    const deleteTask = () => {
        dispatch(deleteTodo({ id: id }))
    }

    const editTask = () => {
        dispatch(editTodoState({ id: id, edit: true }))
    }

    return (
        <section className={"todo__listTasks__task" + className}>
            <div className="todo__listTasks__task__left">
                <input id={id} type="checkbox" name="" checked={completed} onChange={handleCompleteClick} />
                {title}
            </div>

            <div className="todo__listTasks__task__right">
                <button onClick={editTask}>Edit</button>
                <button onClick={deleteTask}>Delete</button>
            </div>
        </section>
    );
};