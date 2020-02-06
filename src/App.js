import React from 'react';
import './App.css';
import ProviderContext from './states/provider';
import Header from './component/header';
import List from './component/list';
import Fandom from './component/fandom';
/*Todo debe renderizarse dentro del Provider
para mantener la Conexión con el context */
function App() {
  return (
    <ProviderContext>
<Header/>
<List/>
<Fandom/>
    </ProviderContext>
  );
}

export default App;
