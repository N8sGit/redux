import {SET_LYRICS} from '../constants';

export const setLyrics = function(str){
  return {
    type: SET_LYRICS,
    lyric: str
  }
}
