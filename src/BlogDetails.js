import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data : blog , pendingg ,error} = useFetch(' http://localhost:7000/blogs/' + id );
    // func to associate with the delete button
     const  deleteBlog = () =>{
        fetch(' http://localhost:7000/blogs/' + id , {
            method : 'DELETE'
        } ) .then(() =>{
          
            navigate('/');
        })
     }
    return ( 
        <div className="blog-details">
             {pendingg && <div>Loading...</div>}
             {error &&  <div>{error} </div>}
             {blog && (
                <article>
                <h2>{blog.title}</h2>
                <p className="author">Written By {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={deleteBlog}>Delete</button>
              
                </article>
    )}
        </div>
     );
}
  
export default BlogDetails;