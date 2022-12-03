import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";


export const ContexctPages = createContext();

export const ProviderPages = ({ children }) => {
 
const [input, setInput] = useState("");
const [meuCep, setMeucep] = useState({});
console.log(meuCep)

  const handleSearch = async ()=> {
    if (input === "") {
      toast.warning("Digite algum cep",{autoClose: 1500}
      );
      return;
    }
    
    

    
    try {
      const response = await api.get(`${input}/json`);

      setMeucep(response.data);
      console.log(meuCep.logradouro);
    } catch {
        toast.error("Cep invalido",{autoClose: 1500})
        setInput("")
        setMeucep({})
    }
  }

  return (<ContexctPages.Provider value={{input,setInput,handleSearch,meuCep}}>{children}</ContexctPages.Provider>)
};
