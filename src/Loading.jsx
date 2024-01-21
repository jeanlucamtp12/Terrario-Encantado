import { loading } from './assets/imagens';

function Loading(){
    return (
        <div className='loader'>
            <img src={loading} />  
            
            <h1>Abrindo o Terrário!</h1>
        </div>
    )
}

export default Loading