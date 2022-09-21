//import { useState , useEffect } from  'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';


const Home = () => {
   
 // importing from useFetch Custom Hook
 const {data : blogs , pendingg , error} = useFetch(' http://localhost:7000/blogs/');
  
 return (
  <div className="home">
    {error && <div> {error} </div>}
   {pendingg && <div>Blogs Loading </div> }
   {blogs && <Bloglist blogs={blogs} title= ' All Blogs' />}
   
  </div>
 );
} 
 
export default Home;

