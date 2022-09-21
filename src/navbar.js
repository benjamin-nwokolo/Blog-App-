import { Link } from 'react-router-dom';



const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Information Blog</h1>
            <h1 className="links">
                <Link to="/">Home</Link> 
                <Link to="/create" > New Blog </Link>  
            </h1>
        
        </nav>
     );
}
 
export default Navbar;
