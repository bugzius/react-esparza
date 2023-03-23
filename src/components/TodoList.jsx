import React from 'react'

import Todo from './Todo.jsx';

const TodoList = ({todos}) => {
    return (
        <ul className='lista-tareas'>
            {
                !todos.length ?
                    <div className='lista-tareas__mensaje'>
                        ~ No hay tareas Agregadas
                    </div>
                : todos.map( todo => <Todo
                                        key={todo.id}
                                        todo={todo}
                                     />
                            )
            }
        </ul>
    );
}
 
export default TodoList;