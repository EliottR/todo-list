import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
    name: "todos",
    initialState: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
                edit: false
            }
            state.push(newTodo)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        editTodoState: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].edit = action.payload.edit;
        },
        editTitle: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].title = action.payload.title;
        }

    }
});

export const { addTodo, toggleComplete, deleteTodo, editTodoState, editTitle } = TodoSlice.actions;

export default TodoSlice.reducer;