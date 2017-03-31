import {SET_LYRICS} from '../constants';

export const setLyrics = function(str){
  return {
    type: SET_LYRICS,
    lyric: str
  }
}

export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};
