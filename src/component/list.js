import React, {useContext} from 'react';
import MyContext from '../states/MyContext';
import '../App.css';
 /*useContext nos permite acceder de manera más directa al
context de la app*/
const List =()=>{
//state representa los estados de la app.
   const {state}= useContext(MyContext)
    return (
        <div className="container_songs">
            <p>Mis canciones favoritas son:</p>
            <li>
            {state.songs.map((val, index)=>{
            return <ol key={index}>{val}</ol>
            })}
            </li>
        </div>
    )
}
export default List;