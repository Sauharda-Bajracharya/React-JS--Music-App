import React from 'react'

function Playerdetails(props) {
  return (
    

        <div className="content">
            <img src={props.song.img_src}></img>
        <h4 className="details-title">{props.song.title}</h4>
        <h3 className="details-artist">{props.song.artist}</h3>
      </div>
  )
}

export default Playerdetails;