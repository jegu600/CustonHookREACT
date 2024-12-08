import { useReducer, useEffect } from 'react';
import todoReducer from './todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem( 'todos' )) || [];
};

const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos])


    const handleNewTodo = (todos) => {
        const action = {
            type: 'Add Todo',
            payload: todos, 
        }
        dispatch (action);
    }


    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Delete Todo',
            payload: id, 
        }
        dispatch (action);
    }
    

    const handleDoTodo = (id) => {
        const action = {
            type: 'Do Todo',
            payload: id, 
        }
        dispatch (action);
    }

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleDoTodo,
    }


}
export default useTodos;
