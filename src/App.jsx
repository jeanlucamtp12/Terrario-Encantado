import { useEffect, useRef } from 'react'
import audioSrc from './assets/som/tema.mp3'

import Floresta from './Floresta'


function App() {

  document.addEventListener('click', musicPlay);

  function musicPlay() {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.3;

    audio.currentTime = 0;
    audio.play();
    document.removeEventListener('click', musicPlay);
  }

  return (
    <div>
      <Floresta />
    </div>
  )

}

export default App