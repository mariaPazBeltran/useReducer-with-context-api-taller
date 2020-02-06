import React, {useContext} from 'react';
import MyContext from '../states/MyContext';
import '../App.css';
/*useContext nos permite acceder de manera más directa al
context de la app*/
const Header =()=>{
    //state representa los estados de la app.
   const {state}= useContext(MyContext)
    return (
        <div>
<p>Cuando estoy feliz escucho a {state.artist}</p>
        </div>
    )
}
export default Header;