## Metodología BEM css

Se trata de una metodología de nombramiento de Clases, que se basa en colocar el nombre de clase hijo con el nombre de su padre.

```jsx
<header className="header">//Contenedor padre
    <h1 className="header__titulo"></h1>//Element Hijo
</header>
```

# FontAwesome

A lo largo del Tiempo con `React` se vuelve indispensable la instalación de nuevas librerías, en este caso vamos a hacer uso de `FontAwesome` la cual es una librería que nos permite hacer uso de íconos para usarlos como componentes dentro del Desarrollo de nuestra Aplicación con `React`.funciona importando un Componente y aplicando las configuraciones de íconos que necesitemos y como ya lo dije, hacer uso de estas herramientas por medio del uso de Componentes

```bash,jsx
* Instalación de Librerías *

1. npm i --save @fortawesome/fontawesome-svg-core
2. npm i --save @fortawesome/react-fontawesome
3. npm i --save @fortawesome/free-solid-svg-icons
```

```jsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nameIcon, faEye } from '@fortawesome/free-solid-svg-icons';

{...}
    <header>
        <FontAwesomeIcon icon={faEye} /> //Modo de uso de Iconos por componente
    </header>
{...}
```

# Libreria para Generar Id's Únicos

## UUID

Se trata de una librería que nos provee de la lógica de una función para retornar en su ejecución un id único.

- Instalación:
```bash
npm install --save uuid
```

- Uso en `JavaScript`
```javascript
import {v4 as uuidv4} from 'uuid';

const idUnique = uuidv4(); //86a5cfee-9e8c-4ac5-9079-f437c5618607
```