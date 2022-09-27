 import {useState} from 'react';
 import{Navigate, useNavigate} from 'react-router-dom'

const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor ] =useState('');
    const [pendingg , setPendingg] = useState(false)
    const navigate = useNavigate();

     //submit function 
       const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author}
        setPendingg(true)
      
        // Post Request For the form
        fetch(' http://localhost:7000/blogs/' , {
           method : 'POST',
           headers :  {'Content-Type' : 'application/json'},
           body : JSON.stringify(blog)
        }).then(() =>{
          console.log('blog added');
          setPendingg(false);
          navigate('/');
        }).catch((err) =>{
           console.log(err);
        })
        
     }
    return (  
        <div className="create">
             <h2>Create a New Blog Post</h2>
           
             <form onSubmit = {handleSubmit} >
                <label> Blog Title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange ={(e) =>{
                    setTitle(e.target.value);
                }}
                 />
                <label> Blog Body</label>
                  <textarea required 
                    value={body}
                    onChange = {(e) =>{ setBody(e.target.value)}}
                  ></textarea>
                  <label> Blog Writer</label>
                  <input type="text"
                  value={author}
                  onChange = {(e) =>{setAuthor(e.target.value)}} />
                { !pendingg &&<button>Create Blog Post</button>}
                { pendingg &&<button>Creating a New Blog</button>}
                
             </form> 
       
        </div>
        
    );
}
 
export default Create;