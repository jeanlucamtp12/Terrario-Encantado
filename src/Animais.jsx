import { useEffect, useState } from "react";

function Animais(){

    const [horaAtual, setHoraAtual] = useState(new Date().getHours());
    const [animal, setAnimal] = useState(null);

    useEffect(() =>{

        function atualizaHora(){
            setHoraAtual(new Date().getHours());
        }

        const intervaloAtt = setInterval(atualizaHora, 60000);

        return () => clearInterval(intervaloAtt);
    }, []);

    useEffect ( () =>{

        if (horaAtual >= 7 && horaAtual <= 8) {
            setAnimal('lesma');
        } else if (horaAtual >= 9 && horaAtual <= 10) {
            setAnimal('passaro');
        } else if (horaAtual >= 11 && horaAtual <= 12) {
            setAnimal('gato');
        } else if (horaAtual >= 13 && horaAtual <= 14) {
            setAnimal('dino');
        } else if (horaAtual >= 15 && horaAtual <= 16) {
            setAnimal('sapo');
        } else if (horaAtual >= 17 && horaAtual <= 18) {
            setAnimal('cachorro');
        } else if (horaAtual >= 19 && horaAtual <= 20) {
            setAnimal('dino_voador');
        } else if (horaAtual >= 21 && horaAtual <= 23) {
            setAnimal('aranha');
        } else if (horaAtual >= 0 && horaAtual <= 4) {
            setAnimal('morcego');
        } else if (horaAtual >= 5 && horaAtual <= 6) {
            setAnimal('cachorro_dormindo');
        } 

    });

    return (
        <div>
            <img id={animal} src= {`../src/assets/animais/${animal}.gif`}/>
        </div>
    )

}

export default Animais;
