import './App.css'
import ElementosFloresta from './ElementosFloresta';
import { useEffect } from 'react';


function Floresta() {

    useEffect(() => {
        
        const script = document.createElement("script");
        script.src = "./src/assets/particlesJs/particles.js";
        script.async = true;

        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.src = "./src/assets/particlesJs/app.js";
        script2.async = true;

        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(script2);
        };
    }, []);



    return (
        <div className="floresta-container">
            <ElementosFloresta />
        </div>
    )
}

export default Floresta;