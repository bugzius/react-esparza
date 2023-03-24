import React,{ useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Header = ({viewTodos, setViewTodos}) => {
    const handleViewTodos = () => setViewTodos(!viewTodos);

    return (
        <header className="header">
            <h1 className="header__titulo">Lista de Tareas</h1>
            <button
                className="header__boton"
                onClick={handleViewTodos}
            >
                { !viewTodos ? 'Mostrar completadas' : 'No mostrar completadas'}
                <FontAwesomeIcon
                    className="header__icono-boton"
                    icon={ viewTodos ? faEye : faEyeSlash}
                ></FontAwesomeIcon>
            </button>
        </header>
    );
}
 
export default Header;