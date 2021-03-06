import React from 'react'

const Lyrics = function(props){
  console.log(props, 'lyric props');
  const artistChange = e => {
    props.setArtist(e.target.value);
  }

  const songChange = e => {
    props.setSong(e.target.value);
  }

  return (
    <div id="lyrics">
      <form onSubmit={props.handleSubmit}>
        <div>
          <input value={props.artistQuery} placeholder="Artist" type="text" onChange={artistChange} />
          <input value={props.songQuery} placeholder="Song" type="text" onChange={songChange} />
        </div>
        <pre>{props.text || 'Search above!'}</pre>
        <button type="submit">Search for Lyrics</button>
      </form>
    </div>
  )
}

export default Lyrics
