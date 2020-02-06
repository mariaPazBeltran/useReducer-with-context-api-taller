import MyContext from "./MyContext";
import React, { useReducer } from "react";
import reducer from "./reducer";
import InitialState from "./InitialState";

/**Cada objeto Context viene con un componente Provider de React 
que permite que los componentes que lo consumen se suscriban a los cambios del contexto. */

/*Acepta un prop value que se pasará a los componentes consumidores que son descendientes de 
este Provider. Un Provider puede estar conectado a muchos consumidores.*/

const ProviderContext = props => {
/*useReducer es una alternativa a useState.
 como parametros tiene el 'reducer', donde estan las acciones que cambian los estados
 y 'initialState', que como su nombre lo indica, estan todos los estados con los que inicia
 nuestra app (**recordar que estos estados serán accesibles desde toda la app**)
 */  
 const [state, dispatch] = useReducer(reducer, InitialState)
        return (
          <MyContext.Provider value={{ state, dispatch }}>
            {props.children}
          </MyContext.Provider>
        );
      };
    
      export default ProviderContext; 