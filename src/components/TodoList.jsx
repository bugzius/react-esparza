import React from 'react'

import Todo from './Todo.jsx';

const TodoList = ({todos, funcTodos, viewTodos}) => {
    //Cambia el estado sobre un Elemeneto del Todo - Completed or not Completed
    const handleToggleCompleted = idTodo => {
        const changeValues = todos.map((elTodo) => {
            if(elTodo.id === idTodo){
                elTodo.completed = !elTodo.completed;
                return elTodo;
            }
            return elTodo;
        });

        //Cambia el estado con la Actualización del Valor [!completed]
        funcTodos(changeValues);
    };

    //Cambiar el contenido del Texto de un Componente en la Lista
    const changeTextTodo = (idTodo, textTodo) => {
        //Cambiamos el Estado de la Lista de Todos
        funcTodos(
            todos.map( todo => {
                if(todo.id === idTodo){
                    todo.text = textTodo;
                    return todo;
                }
                return todo;
            })
        );
    };

    const handleDeleteBtn = id => funcTodos(todos.filter( todo => todo.id !== id));

    return (
        <ul className='lista-tareas'>
            {
                !todos.length ?
                    <div className='lista-tareas__mensaje'>
                        ~ No hay tareas Agregadas
                    </div>
                : todos.map( todo => todo.completed === viewTodos && 
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleToggleCompleted={handleToggleCompleted}
                        changeTextTodo={changeTextTodo}
                        handleDeleteBtn={handleDeleteBtn}
                    />
                )
            }
        </ul>
    );
}
 
export default TodoList;