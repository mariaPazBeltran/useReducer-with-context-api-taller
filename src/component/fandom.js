import React, {useContext} from 'react';
import MyContext from '../states/MyContext';
import '../App.css';
/*useContext nos permite acceder de manera más directa al
context de la app*/
const Fandom =()=>{
//state representa los estados de la app.

/* dispatch es el reducer que contiene
 las acciones que cambian nuestros estados*/
   const {state, dispatch}= useContext(MyContext)

    return (
        <div className='container_fandom'>
            <p>Me considero una {state.fandom}</p>
            {/*accedemos al dispatch y le indicamos que tipo de acción necesitamos.
            Al cambiar los estados desde aqui, afectaremos a todos los componentes
            que los estados que los esten usando */}
            <button onClick={ ()=>  dispatch({type:'new'})}>SuJu</button>
            <button onClick={ ()=>  dispatch({type:'reset'})}>Bruno</button>
        </div>
    )
}
export default Fandom;