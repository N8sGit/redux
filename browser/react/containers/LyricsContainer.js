import React from 'react'
import store from '../store'
import Lyrics from '../components/Lyrics'
import {setLyrics,fetchLyrics} from '../action-creators/lyrics'
import axios from 'axios'

console.log(fetchLyrics, 'fetchLyrics');
console.log(setLyrics, 'setLyrics');

export default class LyricsContainer extends React.Component {
  constructor(){
    super()
    // this.state = { ...store.getState(), artistQuery: '', songQuery: ''}
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    },store.getState());

    this.setArtist = this.setArtist.bind(this)
    this.setSong = this.setSong.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
    
  }


  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  setArtist(artist){
    this.setState({artistQuery: artist})
  }

  setSong(song){
    this.setState({songQuery: song})
  }

  handleSubmit(event){

    if (this.state.artistQuery && this.state.songQuery) {
   store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
 }



    // event.preventDefault();
    // if (this.state.artistQuery && this.state.songQuery)
    // console.log(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    // axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    // .then(res => res.data)
    // .then(data => {
    //   console.log(data)
    //   const setLyricsAction = setLyrics(data.lyric)
    //   store.dispatch(setLyricsAction);
    // })
  }

  render(){
    return (
      <Lyrics
        text={this.state.lyrics.text}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        setArtist={this.setArtist}
        setSong={this.setSong}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
