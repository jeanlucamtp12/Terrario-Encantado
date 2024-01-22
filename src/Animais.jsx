import { useEffect, useState } from "react";
import { aranha, cachorro_morto, cachorro_dormindo, cachorro, dino_voador, dino, gato, ovelha, morcego, passaro, sapo } from './assets/imagens';
import './Animais.css'

function Animais() {

    const [horaAtual, setHoraAtual] = useState(new Date().getHours());
    const [animal, setAnimal] = useState({ id: null, nome: null });

    useEffect(() => {

        function atualizaHora() {
            setHoraAtual(new Date().getHours());
        }

        const intervaloAtt = setInterval(atualizaHora, 60000);
        return () => clearInterval(intervaloAtt);
    }, []);

    useEffect(() => {

        if (horaAtual >= 6 && horaAtual <= 7) {            
            setAnimal({ id: 'passaro', nome: `${passaro}` });
        } else if (horaAtual >= 8 && horaAtual <= 9) {
            setAnimal({ id: 'dino_voador', nome: `${dino_voador}` });
        } else if (horaAtual >= 10 && horaAtual <= 11) {
            setAnimal({ id: 'dino', nome: `${dino}` });
        } else if (horaAtual >= 12 && horaAtual <= 13) {            
            setAnimal({ id: 'ovelha', nome: `${ovelha}` });
        } else if (horaAtual >= 14 && horaAtual <= 15) {
            setAnimal({ id: 'gato', nome: `${gato}` });
        } else if (horaAtual >= 16 && horaAtual <= 17) {
            setAnimal({ id: 'sapo', nome: `${sapo}` });
        } else if (horaAtual >= 18 && horaAtual <= 19) {
            setAnimal({ id: 'cachorro', nome: `${cachorro}` });
        } else if (horaAtual >= 20 && horaAtual <= 21) {
            setAnimal({ id: 'morcego', nome: `${morcego}` });
        } else if (horaAtual >= 22 && horaAtual <= 23) {
            setAnimal({ id: 'aranha', nome: `${aranha}` });
        } else if (horaAtual >= 0 && horaAtual <= 5) {
            setAnimal({ id: 'cachorro_dormindo', nome: `${cachorro_dormindo}` });
        }
    }, [horaAtual]);

    return (
        <div>
            {animal.nome && animal.nome.includes('cachorro_dormindo') && (
                <>
                    <img id={animal.id} src={animal.nome} />
                    <img id='cachorro_morto' src={cachorro_morto} />
                </>
            )}
            {animal.nome && (! animal.nome.includes('cachorro_dormindo')) && (
                <>
                    <img id={animal.id} src={animal.nome} />
                </>
            )}
        </div>
    )
}

export default Animais;
