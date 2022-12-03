
import { useContext } from 'react';
import { ContexctPages } from '../../context/contextCep';


const Main = ()=>{

    const {meuCep} = useContext(ContexctPages)
    return (
    
    <main className='main'>
     <h2> {meuCep.cep} </h2>
     <span>{meuCep.logradouro}</span>
     <span>{meuCep.complemento}</span>
    <span>{meuCep.bairro}</span>
    <span> {meuCep.localidade} - {meuCep.uf}</span>


   </main>
    )
}

export default Main