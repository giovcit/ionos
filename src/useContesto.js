import React,{useState,useContext,createContext} from 'react';



const AppContext = createContext();



const Contesto = ({children}) => {

    const [loading,setLoading] = useState('Testa');


    return <AppContext.Provider value={{loading,setLoading}}>
	{children}
	</AppContext.Provider>

}



const useContesto = () => {
    return useContext(AppContext);

}


export {Contesto,useContesto};

