import React, { useState } from 'react';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';


const Todo = ({todo}) => {
    //Estableciendo el estado para el componente
    const [editing, setEditingMode] = useState(false);
    const [textEdit, setTextEdit] = useState(todo.text);

    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon className='lista-tareas__icono lista-tareas__icono-check' icon={faCheckSquare} />
            <div className='lista-tareas__texto'>
                {
                    editing ?
                        <form className='formulario-editar-tarea' action="">
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
                <FontAwesomeIcon icon={faTimes} className="lista-tareas__icono lista-tareas__icono-accion"/>
            </div>
        </li>
    );
}
 
export default Todo;