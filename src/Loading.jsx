import { loading } from './assets/imagens';

function Loading(){
    return (
        <div className='loader'>
            <img src={loading} />  
            
            <h1>Abrindo o Terrario!</h1>
        </div>
    )
}

export default Loading