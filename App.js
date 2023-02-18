import {useState, useEffect} from 'react';
import Player from './components/player.js';

function App() {

  const [songs] = useState([
    {
      title: "Without Me",
      artist: "Halsey",
      img_src: "./images/withoutme.png",
      src: "./music/withoutme.mp3"
    },
    {
      title: "Eastside",
      artist: "Benny Blanco, Halsey & Khalid",
      img_src: "./images/eastside.png",
      src: "./music/eastside.mp3"
    },
    {
      title: "Sweater Weather",
      artist: "The Neighbourhood",
      img_src: "./images/sweawea.png",
      src: "./music/sweawea.mp3"
    },
    {
      title: "Hope",
      artist: "XXXTentacion",
      img_src: "./images/hope.png",
      src: "./music/hope.mp3"
    },
    {
      title: "Moonlight",
      artist: "XXXTentacion",
      img_src: "./images/moonlight.png",
      src: "./music/moonlight.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
    
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
