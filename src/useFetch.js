import { useState , useEffect } from "react";

const useFetch = (URL) =>{
    const[data, setData] = useState(null);
    const [pendingg,  setPendingg] = useState(true)
    const [error , setError]  =useState(null);
  

     // useEffects
   useEffect(() =>{
     fetch(URL)
     .then((res) =>{
       if(!res.ok){ // if there is an server error
        throw Error('could not fetch data');
       }
      return res.json();
     })
     .then((data) =>{
      setData(data);
      setPendingg(false);
      setError(null);
     })
     .catch((err) =>{
      setPendingg(false);
      setError(err.message)
     })
 },[URL]);
 return{ data , pendingg ,error}
}

export  default useFetch;