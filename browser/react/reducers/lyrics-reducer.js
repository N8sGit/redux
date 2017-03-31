import {SET_LYRICS} from '../constants'

  const initialState = { text: ''}

 const reducer = function(prevState = initialState, action){
   const newState= Object.assign({}, prevState);

  switch(action.type){
    case SET_LYRICS:
      newState.text = action.lyric
      return newState

      default:
        return prevState
      }
}

export default reducer
