import {useState , useEffect} from 'react';
import axios from 'axios';

export const  useClients =()=>{
    const [clients , setClients] = useState([])
    
    useEffect(()=>{
        
        let isCancelled = false;
        //http://localhost:8080 https://tasgeel.herokuapp.com/
        axios.get('https://tasgeel.herokuapp.com/client',{
            headers: {
             // Authorization:'Bearer ' + token,
            'Content-Type': 'application/json'
         },  
         })
         .then(res => {
             if(res.status !== 200 && res.status !==201){
            
             }
             if(res.status === 200 || res.status === 201){
            
             setClients(res.data)
             }
             })
         .catch((error) => {
             console.log(error);
         })
         return ()=>{
            isCancelled = true;
         }
       
        
    },[clients])       


    return {clients , setClients}
}   