import React,{ useState, useEffect } from 'react'

import './App.css';

import Header from './components/Header';
import FormTodos from './components/FormTodos';
import TodoList from './components/TodoList';

const App = () => {
    //Buscamos los valores Almacenados en LocalStorage.
    const localStorageTodos = JSON.parse(localStorage.getItem('todos-app')) ?? [];
    //Usando el estado para manejar la Información de las tareas
    const [todos, setTodos] = useState(localStorageTodos);


    const localStorageViewTodos = JSON.parse(localStorage.getItem('viewTodos')) ?? true;
    const [viewTodos, setViewTodos] = useState(localStorageViewTodos);

    //Cada vez que el valor de [Todos] cambie, vamos a guardar los valores en localStorage
    useEffect(
        () => localStorage.setItem('todos-app',JSON.stringify(todos)),
        [todos]
    );

    useEffect(() => {
        localStorage.setItem('viewTodos', `${viewTodos}`);
    },[viewTodos])

    return (
        <div className="contenedor">
            <Header viewTodos={viewTodos} setViewTodos={setViewTodos}/>
            <FormTodos todos={todos} addTodoFunc={setTodos} />
            <TodoList viewTodos={viewTodos} funcTodos={setTodos} todos={todos} />
        </div>
    );
}
 
export default App;