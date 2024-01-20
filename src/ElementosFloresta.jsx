import Animais from "./Animais";
import { nuvem, arvore1, arvore2, arvore3, cogumelo, mato } from './assets/imagens';


const elementos = [
    { id: 'nuvem1', src: `${nuvem}`, className: 'ceu' },
    { id: 'nuvem2', src:  `${nuvem}`, className: 'ceu' },
    { id: 'nuvem3', src:  `${nuvem}`, className: 'ceu' },
    { id: 'nuvem4', src:  `${nuvem}`, className: 'ceu' },
    { id: 'arv1', src:  `${arvore1}`, className: 'chao' },
    { id: 'arv2', src:  `${arvore2}`, className: 'chao' },
    { id: 'arv3', src:  `${arvore3}`, className: 'chao' },
    { id: 'cogumelo', src:  `${cogumelo}`, className: 'chao' },
]

const matos = Array.from({ length: 100 }, (_, index) => index);


function ElementosFloresta() {

    return (
        <div>
            {elementos.map((elemento, index) => (
                <img key={index} id={elemento.id} src={elemento.src} className={elemento.className} />
            ))}

            <div className="subsolo">
                {matos.map((i) => (
                    <img
                        key={i}
                        src={mato}
                        className="mato"
                        id={`mato${i}`}
                        style={{
                            bottom: "0%",
                            width: "8%",
                            left: `${i * 7}%`,

                        }}
                    />
                ))}
            </div>

            <Animais />
            
        </div>

    )
}

export default ElementosFloresta;