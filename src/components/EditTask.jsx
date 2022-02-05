import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodoState, editTitle } from "../redux/TodoSlice";

export const EditTask = ({ oldValue, id }) => {

    const [value, setValue] = useState(oldValue);

    const dispatch = useDispatch();

    const handleEditTask = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTodoState({ id: id, edit: false }));
        dispatch(editTitle({ id: id, title: value }));
    }

    return (
        <form onSubmit={handleSubmit} className="todo__listTasks__editTask">
            <input type="text" defaultValue={oldValue} name="" id={id} onChange={handleEditTask} />
            <button type="submit">Valider</button>
        </form>
    );
};