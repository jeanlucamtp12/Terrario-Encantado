import './App.css'
import ElementosFloresta from './ElementosFloresta';
import { useState, useEffect } from 'react';
import Particle from './assets/particlesJs/Particle';
import Loading from './Loading';

function Floresta() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            <div className="floresta-container">
                <div className='telaTransparente'></div>
                {loading && <Loading id="loader" />}
                <Particle id="tsparticles" />
                <ElementosFloresta />
            </div>
        </div>

    )
}

export default Floresta;