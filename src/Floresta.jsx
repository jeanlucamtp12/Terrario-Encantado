import './App.css'
import ElementosFloresta from './ElementosFloresta';
import { useEffect } from 'react';

function Floresta() {


    useEffect(() => {    
        var link = "/assets/particlesJs/particles.js"
        var link2 = "/assets/particlesJs/app.js"
        const script = document.createElement("script");
        script.src = link;
        script.async = true;
        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.src = link2;
        script2.async = true;
        document.body.appendChild(script2);
        
    }, []);



    return (
        <div className="floresta-container">
            <ElementosFloresta />
        </div>
    )
}

export default Floresta;