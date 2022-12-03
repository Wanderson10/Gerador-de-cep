import {FiSearch} from 'react-icons/fi';
import Main from '../main/main';
import { useContext } from 'react';
import { ContexctPages } from '../../context/contextCep';



const MainContainer = ()=>{

const {handleSearch,input,setInput,meuCep} = useContext(ContexctPages)


return(
<div className='container'>
      <h1 className='title'>Buscador de Cep</h1>
      <div className="containerInput">
       <input type={"text"} value={input} onChange={(event)=>setInput(event.target.value)} placeholder="digite seu cep..."></input>
       <button onClick={()=>handleSearch()} className="buttonSearch">
        <FiSearch size={25} color='#fff'/>
       </button>
       </div>
       {
       Object.keys(meuCep).length > 0 ?(
        <Main></Main>
       ):(
       <p></p>
       )
       }
      
    </div>
)
}

export default MainContainer