import React,{ useState } from 'react'

import './App.css';

import Header from './components/Header';
import FormTodos from './components/FormTodos';
import TodoList from './components/TodoList';

const App = () => {
    //Usando el estado para manejar la Información de las tareas
    const [todos, setTodos] = useState(
        [
            {
                id:1,
                text:'lorem ipsum',
                completed: false
            },
            {
                id:2,
                text:'lorem Enum',
                completed: true
            },
            {
                id:3,
                text:'lorem Ismet',
                completed: false
            },
            {
                id:4,
                text:'lorem dolor',
                completed: false
            },
        ]
    );

    return (
        <div className="contenedor">
            <Header />
            <FormTodos todos={todos} addTodoFunc={setTodos}/>
            <TodoList todos={todos}/>
        </div>
    );
}
 
export default App;