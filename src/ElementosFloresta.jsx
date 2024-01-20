import Animais from "./Animais";

const elementos = [
    { id: 'nuvem1', src: '../src/assets/nuvem.png', className: 'ceu' },
    { id: 'nuvem2', src: '../src/assets/nuvem.png', className: 'ceu' },
    { id: 'nuvem3', src: '../src/assets/nuvem.png', className: 'ceu' },
    { id: 'nuvem4', src: '../src/assets/nuvem.png', className: 'ceu' },
    { id: 'arv1', src: '../src/assets/arvore1.png', className: 'chao' },
    { id: 'arv2', src: '../src/assets/arvore2.png', className: 'chao' },
    { id: 'arv3', src: '../src/assets/arvore3.png', className: 'chao' },
    { id: 'cogumelo', src: '../src/assets/cogumelo.gif', className: 'chao' },
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
                        src={`../src/assets/mato.png`}
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