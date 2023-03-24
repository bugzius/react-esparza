import {v4 as uuidv4} from 'uuid';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormTodos = ({addTodoFunc, todos}) => {
    const [inputTextTodo, setinputTextTodo] = useState('');

    //Action button add Todo
        //Función que se va a ejecutar al Hacer submit
    const handleSubmitForm = e => {
        //Limpiamos el Comportamiento por default
        e.preventDefault();

        //Extraemos el Valor del Input:text
        //const valueText = e.target['text-form'].value.trim();

        try {
            //Validando el Valor recibido
            if(!inputTextTodo.trim() || inputTextTodo.trim().length > 100){
                throw TypeError('No es un texto válido');
            };
            
            //Establece un Objeto base para ser agregado al Estados de Tareas
            const objTodo = {
                id:uuidv4(),
                text: inputTextTodo,
                completed: false
            };

            //Reseteando los valores del Formulario
            setinputTextTodo('');

            //Cambia el estado de las tareas
            addTodoFunc([...todos, objTodo]);

        } catch (err) {console.log(err)};
    }

    //Cambia el estado para el Texto del Input
    const handleTextButton = ({target:{value}}) => setinputTextTodo(value);

    return (
        <form className='formulario-tareas' onSubmit={handleSubmitForm}>
            <input
                type="text"
                className='formulario-tareas__input'
                placeholder='Escribe una tarea'
                name='text-form'
                value={inputTextTodo}
                onChange={handleTextButton}
            />
            <button
                type='submit'
                className='formulario-tareas__btn'
            >
                <FontAwesomeIcon
                    icon={faPlusSquare}
                    className="formulario-tareas__icono-btn"
                />
            </button>
        </form>
    );
}
 
export default FormTodos;