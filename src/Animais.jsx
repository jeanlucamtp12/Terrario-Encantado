import { useEffect, useState } from "react";
import { aranha,  cachorro_dormindo, cachorro, dino_voador, dino, gato, ovelha , morcego, passaro, sapo } from './assets/imagens';

function Animais(){

    const [horaAtual, setHoraAtual] = useState(new Date().getHours());
    const [animal, setAnimal] = useState({ id: null, nome: null });

    useEffect(() =>{

        function atualizaHora(){
            setHoraAtual(new Date().getHours());
        }

        const intervaloAtt = setInterval(atualizaHora, 60000);

        return () => clearInterval(intervaloAtt);
    }, []);

    useEffect ( () =>{

        if (horaAtual >= 7 && horaAtual <= 8) {
            setAnimal({ id: 'ovelha', nome: `${ovelha}` });
        } else if (horaAtual >= 9 && horaAtual <= 10) {
            setAnimal({ id: 'passaro', nome: `${passaro}` });
        } else if (horaAtual >= 11 && horaAtual <= 12) {
            setAnimal({ id: 'gato', nome: `${gato}` });
        } else if (horaAtual >= 13 && horaAtual <= 14) {
            setAnimal({ id: 'dino', nome: `${dino}` });
        } else if (horaAtual >= 15 && horaAtual <= 16) {
            setAnimal({ id: 'sapo', nome: `${sapo}` });
        } else if (horaAtual >= 17 && horaAtual <= 18) {
            setAnimal({ id: 'cachorro', nome: `${cachorro}` });
        } else if (horaAtual >= 19 && horaAtual <= 20) {
            setAnimal({ id: 'dino_voador', nome: `${dino_voador}` });
        } else if (horaAtual >= 21 && horaAtual <= 23) {
            setAnimal({ id: 'aranha', nome: `${aranha}` });
        } else if (horaAtual >= 0 && horaAtual <= 4) {
            setAnimal({ id: 'morcego', nome: `${morcego}` });
        } else if (horaAtual >= 5 && horaAtual <= 6) {
            setAnimal({ id: 'cachorro_dormindo', nome: `${cachorro_dormindo}` });
        } 
    });

    return (
        <div>
            <img id={animal.id} src= {animal.nome}/>
        </div>
    )

}

export default Animais;
