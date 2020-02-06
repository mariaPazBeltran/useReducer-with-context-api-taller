import React from 'react';
/*
Crea un objeto Context. Cuando React renderiza un componente que se suscribe 
a este objeto Context, este leerá el valor de contexto actual del 
Provider más cercano en el árbol.
*/
const MyContext = React.createContext();
//es similar al createStore de redux
export default MyContext;