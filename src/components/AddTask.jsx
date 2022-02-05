import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

export const AddTask = () => {
    const [task, setTask] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task != "") {
            dispatch(addTodo({
                title: task,
            }))
            setTask("");
        }
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="todo__form">
            <input className="todo__form__input" type="text" name="" id="" onChange={handleChange} value={task} placeholder="Write here" />
            <button className="todo__form__button" type="submit">Ajouter</button>
        </form>
    );
};