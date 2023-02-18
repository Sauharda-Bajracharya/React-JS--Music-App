import React, {useState, useRef, useEffect} from 'react';
import Details from './playerdetails';
import Controls from './playercontrols';
import './player.css';

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
      if (isPlaying) {
          audioEl.current.play();
      } else {
          audioEl.current.pause();
      }
  });

  const SkipSong = (forwards = true) => {
      if (forwards) {
          props.setCurrentSongIndex(() => {
              let temp = props.currentSongIndex;
              temp++;

              if (temp > props.songs.length - 1) {
                  temp = 0;
              }

              return temp;
          });
      } else {
          props.setCurrentSongIndex(() => {
              let temp = props.currentSongIndex;
              temp--;

              if (temp < 0) {
                  temp = props.songs.length - 1;
              }

              return temp;
          });
      }
  }

  return (
    <div className="random">
        <div className="main-container">
            <div className="main-card">
                <h3>Hello</h3>

                <div className="small-card-1">
                    <span className="title">Playlist #1</span><br/>
                    <span className="subtitle">Nepali songs</span>
                </div>
                <div className="small-card-2">
                    <span className="title">Playlist #2</span><br/>
                    <span className="subtitle">Mood mixes</span>
                </div>
                <div className="small-card-3">
                    <span className="title">Playlist #3</span><br/>
                    <span className="subtitle">English songs</span>
                </div>
                <div className="small-card-4">
                    <span className="title">Playlist #4</span><br/>
                    <span className="subtitle">Eminem</span>
                </div>

                {/* <ul>
                    <li>Without Me by Halsey</li>
                <hr></hr>
                    <li>Eastside by Benny Blanco, Halsey & Khalid</li>
                <hr></hr>
                    <li>Sweater Weather by The Neighbourhood</li>
                <hr></hr>
                    <li>Hope by XXXTentacion</li>
                <hr></hr>
                    <li>Moonlight by XXXTentacion</li>
                <hr></hr>
                </ul> */}
            </div>
        </div>
            <div className="container">
                <div className="card">
                <div className="s-content">
                    <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
                    <Details song={props.songs[props.currentSongIndex]} />
                    <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                    <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Player;