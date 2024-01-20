import './App.css'
import ElementosFloresta from './ElementosFloresta';
import { useEffect } from 'react';
import Particle from './assets/particlesJs/Particle';

function Floresta() {

    return (
        <div>
        <div className="floresta-container"> 
            <Particle  id="tsparticles" />
            <ElementosFloresta />
        </div>
        </div>

    )
}

export default Floresta;