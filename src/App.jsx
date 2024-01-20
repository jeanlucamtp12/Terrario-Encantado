import React, { useState, useEffect } from 'react';
import Loading from './Loading';

// Importe as imagens do seu arquivo
import * as imagens from  './assets/imagens';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagensArray = [
      imagens.nuvem,
      imagens.arvore1,
      imagens.arvore2,
      imagens.arvore3,
      imagens.cogumelo,
      imagens.mato,
      imagens.aranha,
      imagens.cachorro_dormindo,
      imagens.cachorro,
      imagens.dino_voador,
      imagens.dino,
      imagens.gato,
      imagens.ovelha,
      imagens.morcego,
      imagens.passaro,
      imagens.sapo,
    ];

    const promises = imagensArray.map((img) => {
      return new Promise((resolve) => {
        const imagem = new Image();
        imagem.src = img;
        imagem.onload = resolve;
      });
    });

    Promise.all(promises)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar recursos:', error);
        setLoading(false);
      });
  }, []); // Executa apenas uma vez durante a montagem do componente

  if (loading) {
    return <Loading />;
  }

  // O restante do seu código aqui após o carregamento

  return (
    <div>
      <Floresta />
    </div>
  )

}

export default App