/*Estado inicial de nuestra app.
Al estar dentro de Context, se podrá acceder a el desde cualquier
componente. Por lo que ya no será necesario es uso de props, ni de
los components del tipo 'class' */

const InitialState = {
    artist:'Bruno Mars',
    songs: ['The lazy Song', 'Just The Way You Are',
        'It Will Rain', 'That´s What i Like', 
        'Runaway Baby', 'Treasure', 'Marry You',
        'Grenade', 'Natalie'],
    fandom: 'Hooligan'
  };
  export default InitialState;