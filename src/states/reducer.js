import InitialState from "./InitialState";
/*La función Reducer tiene todas las acciones que cambian los estados */
function reducer(state, action) {
    switch (action.type) {
      /*al momento de llamar estos eventos, se accede a dispatch y se le
      indica el 'case' */
      case 'new':
        let artist = 'Super Junior'
        let songs = ['Its You', 'Mr Simple', 'SUPER clap',
                    'Lo Siento', 'SPY', 'No Other', 'I Think',
                  'One More Time', 'Super Duper']
        let sujuFandom = 'E.L.F'
        
       return {
        ...state,
        artist,
        songs,
        fandom: sujuFandom
        }

      case 'reset':
        return InitialState
      default:
        throw new Error();
    }
  }
  export default reducer
