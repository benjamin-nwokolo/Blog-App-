import { Link } from "react-router-dom";
const Errorpage = () => {
    return (
        <div className="Not-found">
            <p>Page Cannot be Found</p>
            <Link  to = "/" className="home"> Back to home page</Link>
        </div>
      );
}
 
export default Errorpage;