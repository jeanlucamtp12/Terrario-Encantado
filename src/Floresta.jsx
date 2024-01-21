import './App.css'
import ElementosFloresta from './ElementosFloresta';
import { useState, useEffect } from 'react';
import Particle from './assets/particlesJs/Particle';
import Loading from './Loading';
import { logo, entrar } from './assets/imagens';

function Floresta() {

    const [loading, setLoading] = useState(true);
    const [botao, setBotao] = useState(true);
    const [exibirFundo, setExibirFundo] = useState(true);
    const [exibirLogo, setExibirLogo] = useState(true);

    useEffect(() => {

        var timeoutId;

        const handleClick = () => {
            setBotao(false);
            setExibirFundo(false);
            setExibirLogo(false);
            
            timeoutId = setTimeout(() => {
                setLoading(false);
            }, 4000);
        };

        document.getElementById('botaoIniciar').addEventListener('click', handleClick);

        return () => {
            document.getElementById('botaoIniciar').removeEventListener('click', handleClick);
            clearTimeout(timeoutId);
        };
    }, []);



    return (
        <div>
            <div className="floresta-container">
                <div className='telaTransparente'></div>
                <div className={exibirFundo ? 'fundoBotao' : ''}>
                <img className={`logo ${exibirLogo ? '' : 'hidden'}`} src={logo}/>
                    {botao && <img src={entrar} id='botaoIniciar' />}
                
              
                {!exibirFundo &&(
                    <>
                        {loading && <Loading id="loader" />}
                        <Particle id="tsparticles" />
                        <ElementosFloresta />
                    </>
                )}</div>
            </div>
        </div>

    )
}

export default Floresta;