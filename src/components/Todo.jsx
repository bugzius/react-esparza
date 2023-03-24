import React, { useState } from 'react';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';


const Todo = ({todo,handleToggleCompleted, changeTextTodo, handleDeleteBtn}) => {
    //Estableciendo el estado para el componente
    const [editing, setEditingMode] = useState(false);
    const [textEdit, setTextEdit] = useState(todo.text);

    //Submit del Formulario para iniciar el Cambio de Texto sobre la lista de Tareas
    const handleSubmit = e => {
        e.preventDefault();
        
        //Cambiamos el Estado de nuestra lista de Todos
        changeTextTodo(todo.id, textEdit.trim());

        //Cambiamos el Estado para el Modo de Edición
        setEditingMode(!editing);
    };

    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon
                className='lista-tareas__icono lista-tareas__icono-check'
                icon={todo.completed ? faCheckSquare : faSquare}
                onClick={() => handleToggleCompleted(todo.id)}
            />
            <div className='lista-tareas__texto'>
                {
                    editing ?
                        <form onSubmit={handleSubmit} className='formulario-editar-tarea'>
                            <input
                                type="text"
                                className='formulario-editar-tarea__input'
                                value={textEdit}
                                onChange={e => setTextEdit(e.target.value)}
                            />
                            <button
                                type='submit'
                                className='formulario-editar-tarea__btn'
                            >
                                Actualizar
                            </button>
                        </form>
                    : todo.text
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon
                    icon={faEdit}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => setEditingMode(!editing)}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => handleDeleteBtn(todo.id)}
                />
            </div>
        </li>
    );
}
 
export default Todo;